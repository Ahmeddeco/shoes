import Link from 'next/link'
import Navbar from './Navbar'
import { IsUser } from '@/functions/authUser'
import { LogIn, ShoppingBagIcon } from 'lucide-react'
import { Button } from '../ui/button'
import UserDropdown from './UserDropdown'
import {
	LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import ThemeButton from '../theme/ThemeButton'

export default async function FrontHeader() {
	const user = await IsUser()
	return (
		<header  className='container mx-auto h-12 border-b fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-background/95'>
			{/* ---------------------------------- logo ---------------------------------- */}
			<div className='flex items-center'>
				<Link href={`/`}>
					<h1 className='capitalize font-bold text-xl lg:text-3xl'>
						ahmed<span className='capitalize text-primary'>shoe</span>
					</h1>
				</Link>
			</div>

			{/* ------------------------------ DesktopNavbar ----------------------------- */}
			<nav className='hidden md:flex justify-center items-center gap-4'>
				<Navbar />
			</nav>

			{/* ------------------------------- Auth & Menu ------------------------------ */}
			<div className='flex items-center gap-1'>
				<ThemeButton />
				{user ? (
					<div className='flex items-center gap-1'>
						<Link href={'/bag'} className='group p-2 flex items-center mr-2'>
							<Button
								variant={'ghost'}
								size={'icon'}
								className='group-hover:text-foreground duration-500 ease-in-out text-muted-foreground'
							>
								<ShoppingBagIcon className='size-6' />5
							</Button>
						</Link>
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
