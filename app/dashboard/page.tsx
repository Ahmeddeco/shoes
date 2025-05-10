import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { DollarSign, PartyPopper, ShoppingBag, User2 } from 'lucide-react'

export default function DashboardPage() {
	return (
		<>
			<div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
				{/* ------------------------------ Total Revenue ----------------------------- */}
				<Card>
					<CardHeader className='flex flex-row items-center justify-between pb-2'>
						<CardTitle>Total Revenue</CardTitle>
						<DollarSign className='size-4 text-green-500' />
					</CardHeader>
					<CardContent>
						<p className='text-2xl font-bold'>$100.000</p>
						<p className='text-xs text-muted-foreground capitalize '>
							Based on 100 Charges
						</p>
					</CardContent>
				</Card>

				{/* ------------------------------- Total Sales ------------------------------ */}
				<Card>
					<CardHeader className='flex flex-row items-center justify-between pb-2'>
						<CardTitle>Total Sales</CardTitle>
						<ShoppingBag className='size-4 text-blue-500' />
					</CardHeader>
					<CardContent>
						<p className='text-2xl font-bold'>+50</p>
						<p className='text-xs text-muted-foreground capitalize'>
							Total sales on shoes
						</p>
					</CardContent>
				</Card>

				{/* ----------------------------- Total products ----------------------------- */}
				<Card>
					<CardHeader className='flex flex-row items-center justify-between pb-2'>
						<CardTitle>Total products</CardTitle>
						<PartyPopper className='size-4 text-indigo-500' />
					</CardHeader>
					<CardContent>
						<p className='text-2xl font-bold'>37</p>
						<p className='text-xs text-muted-foreground capitalize'>
							total products created
						</p>
					</CardContent>
				</Card>

				{/* ------------------------------- Total Users ------------------------------ */}
				<Card>
					<CardHeader className='flex flex-row items-center justify-between pb-2'>
						<CardTitle>Total Users</CardTitle>
						<User2 className='size-4 text-orange-500' />
					</CardHeader>
					<CardContent>
						<p className='text-2xl font-bold'>120</p>
						<p className='text-xs text-muted-foreground capitalize'>
							Total Users signed up
						</p>
					</CardContent>
				</Card>
			</div>

			{/* ------------------------------ Main Section ------------------------------ */}

			<div className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10'>
				{/* ------------------------------ Transactions ------------------------------ */}

				<Card className='xl:col-span-2'>
					<CardHeader>
						<CardTitle>Transactions</CardTitle>
						<CardDescription>
							Recent Transactions from your store.
						</CardDescription>
					</CardHeader>
					<CardContent>
						
					</CardContent>
				</Card>

				{/* ------------------------------ Recent sales ------------------------------ */}

				<Card>
					<CardHeader>
						<CardTitle>Recent sales</CardTitle>
					</CardHeader>
					<CardContent className='flex flex-col gap-8'>
						<div className='flex items-center gap-4'>
							<Avatar className='hidden sm:flex size-9'>
								<AvatarFallback>AH</AvatarFallback>
							</Avatar>
							<div className='grid gap-1'>
								<p className='capitalize text-sm font-medium'>ahmed mohamed</p>
								<p className='text-sm text-muted-foreground'>test@test.com</p>
							</div>
              <p className="ml-auto font-medium">+$1,999.00</p>
						</div>
						<div className='flex items-center gap-4'>
							<Avatar className='hidden sm:flex size-9'>
								<AvatarFallback>AH</AvatarFallback>
							</Avatar>
							<div className='grid gap-1'>
								<p className='capitalize text-sm font-medium'>ahmed mohamed</p>
								<p className='text-sm text-muted-foreground'>test@test.com</p>
							</div>
              <p className="ml-auto font-medium">+$1,999.00</p>
						</div>
						<div className='flex items-center gap-4'>
							<Avatar className='hidden sm:flex size-9'>
								<AvatarFallback>AH</AvatarFallback>
							</Avatar>
							<div className='grid gap-1'>
								<p className='capitalize text-sm font-medium'>ahmed mohamed</p>
								<p className='text-sm text-muted-foreground'>test@test.com</p>
							</div>
              <p className="ml-auto font-medium">+$1,999.00</p>
						</div>
						<div className='flex items-center gap-4'>
							<Avatar className='hidden sm:flex size-9'>
								<AvatarFallback>AH</AvatarFallback>
							</Avatar>
							<div className='grid gap-1'>
								<p className='capitalize text-sm font-medium'>ahmed mohamed</p>
								<p className='text-sm text-muted-foreground'>test@test.com</p>
							</div>
              <p className="ml-auto font-medium">+$1,999.00</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	)
}
