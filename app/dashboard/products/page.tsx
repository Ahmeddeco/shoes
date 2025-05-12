import { Button } from '@/components/ui/button'
import { ImageMinus, MoreHorizontal, PlusCircle } from 'lucide-react'
import Link from 'next/link'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { prisma } from '@/lib/prisma'
import Image from 'next/image'

const getData = async () => {
	const data = await prisma.product.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	})
	return data
}

export default async function ProductsPage() {
	const data = await getData()

	return (
		<>
			<div className='flex items-center justify-end'>
				<Button asChild>
					<Link href={`/dashboard/products/create`}>
						<PlusCircle className='size-5' />
						add product
					</Link>
				</Button>
			</div>

			{/* -------------------------------- Main Card ------------------------------- */}
			<Card className='mt-5 min-h-[70vh]'>
				<CardHeader>
					<CardTitle>products</CardTitle>
					<CardDescription>
						Manage your products and view their sales performance.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className='w-[100px]'>Image</TableHead>
								<TableHead>name</TableHead>
								<TableHead>status</TableHead>
								<TableHead>category</TableHead>
								<TableHead>price</TableHead>
								<TableHead>date</TableHead>
								<TableHead className='text-end'>actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{data.map(({ createdAt, id, images, name, price, status,category }) => (
								<TableRow key={id}>
									<TableCell>
										{images.length > 0 ? (
											<Image
												src={images[0]}
												alt={'product'}
												height={64}
												width={64}
												className='rounded-md object-cover'
											/>
										) : (
											<ImageMinus />
										)}
									</TableCell>
									<TableCell className='capitalize'>{name}</TableCell>
									<TableCell className='capitalize'>{status}</TableCell>
									<TableCell className='capitalize'>{category}</TableCell>
									<TableCell>${price}</TableCell>
									<TableCell>{createdAt.toLocaleDateString('en-GB')}</TableCell>
									<TableCell className='text-end'>
										<DropdownMenu>
											<DropdownMenuTrigger>
												<MoreHorizontal className='size-4' />
											</DropdownMenuTrigger>
											<DropdownMenuContent align='end'>
												<DropdownMenuLabel>Actions</DropdownMenuLabel>
												<DropdownMenuSeparator />
												<DropdownMenuItem asChild>
													<Link href={`/dashboard/products/edit/${id}`}>
														Edit
													</Link>
												</DropdownMenuItem>
												<DropdownMenuItem asChild>
													<Link href={`/dashboard/products/delete/${id}`}>
														Delete
													</Link>
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</>
	)
}
