import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

export default function OrdersPage() {
	return (
		<Card>
			<CardHeader className='px-7'>
				<CardTitle>Orders</CardTitle>
				<CardDescription>Recent orders from your store.</CardDescription>
			</CardHeader>
			<CardContent>
				{/* ---------------------------------- Table --------------------------------- */}
				<Table>
					{/* <TableCaption>A list of your recent invoices.</TableCaption> */}
					<TableHeader>
						<TableRow>
							<TableHead>Customer</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Date</TableHead>
							<TableHead className='text-right'>Amount</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>
								<p className='font-medium capitalize'>ahmed mohamed</p>
								<p className='hidden md:flex text-sm text-muted-foreground'>
									test@email.com
								</p>
							</TableCell>
							<TableCell className='capitalize'>Sale</TableCell>
							<TableCell className='capitalize'>successful</TableCell>
							<TableCell className='capitalize'>2025-5-2</TableCell>
							<TableCell className='text-right capitalize'>$250.00</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}
