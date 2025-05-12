import Link from 'next/link'
import Navbar from './Navbar'
import { LogIn, ShoppingBagIcon } from 'lucide-react'
import { Button } from '../ui/button'
import UserDropdown from './UserDropdown'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components'
import ThemeButton from '../theme/ThemeButton'
import Logo from './Logo'
import { redis } from '@/lib/redis'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { Cart } from '@/types/cart'

export default async function FrontHeader() {
	const { getUser } = getKindeServerSession()
	const user = await getUser()

	const cart: Cart | null = await redis.get(`cart-${user?.id}`)
	const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0

	return (
		<header className='container mx-auto h-12 border-b fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-background/95'>
			{/* ---------------------------------- logo ---------------------------------- */}
			<Logo />

			{/* ------------------------------ DesktopNavbar ----------------------------- */}
			<nav className='hidden md:flex justify-center items-center gap-4'>
				<Navbar />
			</nav>

			{/* ------------------------------- Auth & Cart ------------------------------ */}
			<div className='flex items-center gap-4'>
				<ThemeButton />
				{user ? (
					<div className='flex items-center gap-4'>
						<Button
							variant={'ghost'}
							size={'icon'}
							className='group-hover:text-foreground duration-500 ease-in-out text-muted-foreground'
							asChild
						>
							<Link href={'/bag'} className='gap-1 flex items-center '>
								<ShoppingBagIcon className='size-6' />
								<p>{total}</p>
							</Link>
						</Button>
						<UserDropdown />
					</div>
				) : (
					<Button
						size={'icon'}
						variant={'ghost'}
						className='hidden md:flex'
						asChild
					>
						<LoginLink>
							<LogIn className='size-6' />
						</LoginLink>
					</Button>
				)}
			</div>
		</header>
	)
}
