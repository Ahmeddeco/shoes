import DashboardNavigation from '@/components/dashboard/DashboardNavigation'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { CircleUser, Menu } from 'lucide-react'
import { redirect } from 'next/navigation'
import {
	LoginLink,
	RegisterLink,
	LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components'

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { getUser } = getKindeServerSession()
	const user = await getUser()

	if (!user || user.email !== process.env.ADMIN_EMAIL) {
		return redirect('/')
	}

	return (
		<section className='flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
			<header className='sticky bg-background/95 top-0 flex h-16 items-center justify-between gap-4 border-b '>
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
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant={'secondary'}
							size={'icon'}
							className='rounded-full'
						>
							<CircleUser className='size-5' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<LogoutLink>Logout</LogoutLink>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</header>
			<main className='my-5'>{children}</main>
		</section>
	)
}
