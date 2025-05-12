import DashboardNavigation from '@/components/dashboard/DashboardNavigation'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import UserDropdown from '@/components/layout/UserDropdown'
import Image from 'next/image'
import { IsAdminUser } from '@/functions/authUser'
import Link from 'next/link'
import Logo from '@/components/layout/Logo'

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	await IsAdminUser()

	return (
		<section className='flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
			<header className='sticky bg-background/95 top-0 flex h-16 items-center justify-between gap-4 border-b '>
				{/* ---------------------------------- logo ---------------------------------- */}
				<Logo />

				{/* --------------------------- DashboardNavigation -------------------------- */}
				<nav className='hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 '>
					<DashboardNavigation />
				</nav>
				{/* ------------------------------ Mobile Sheet ------------------------------ */}
				<nav className='md:hidden block'>
					<Sheet>
						<SheetTrigger>
							<Menu className='size-5' />
						</SheetTrigger>
						<SheetContent side='left'>
							<SheetHeader>
								<SheetTitle>Dashboard</SheetTitle>
							</SheetHeader>
							<Separator />
							<nav className='grid gap-6 text-lg font-medium p-8'>
								<DashboardNavigation />
							</nav>
						</SheetContent>
					</Sheet>
				</nav>
				<UserDropdown />
			</header>
			<main className='my-5'>{children}</main>
		</section>
	)
}
