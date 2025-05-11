import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import { IsUser } from '@/functions/authUser'
import { LogIn, ShoppingBagIcon } from 'lucide-react'
import { Button } from '../ui/button'
import UserDropdown from './UserDropdown'
import {
	LoginLink,
	RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import ThemeButton from '../theme/ThemeButton'

export default async function FrontHeader() {
	const user = await IsUser()
	return (
		<header className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between'>
			{/* ---------------------------------- logo ---------------------------------- */}
			<div className='flex items-center'>
				<Link href={`/`}>
					<h1 className='capitalize font-bold text-xl lg:text-3xl'>
						ahmed<span className='capitalize text-chart-3'>shoe</span>
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
