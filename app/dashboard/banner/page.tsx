import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { prisma } from '@/lib/prisma'
import { MoreHorizontal, PlusCircle, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const getData = async () => {
	const data = await prisma.banner.findMany({
		orderBy: { createdAt: 'desc' },
	})
	return data
}

export default async function BannerPage() {
	const data = await getData()
	console.log('data', data)

	return (
		<>
			{/* ------------------------------- add banner ------------------------------- */}
			<div className='flex items-center justify-end'>
				<Button asChild>
					<Link href={`/dashboard/banner/create`}>
						<PlusCircle className='size-5' />
						add banner
					</Link>
				</Button>
			</div>

			{/* --------------------------------- banners -------------------------------- */}
			<Card className='mt-5 min-h-[70vh]'>
				<CardHeader>
					<CardTitle>banners</CardTitle>
					<CardDescription>
						Manage your banners and view their sales performance.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Image</TableHead>
								<TableHead>title</TableHead>
								<TableHead className='text-end'>actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{data.map((image, i) => (
								<TableRow key={i}>
									<TableCell>
										<div className='h-32 aspect-video relative'>
											<Image
												src={image.imageString}
												alt={'banner'}
												fill
												className='object-cover rounded-lg'
											/>
										</div>
									</TableCell>
									<TableCell className='capitalize'>{image.title}</TableCell>
									<TableCell className='text-end'>
										<DropdownMenu>
											<DropdownMenuTrigger>
												<MoreHorizontal className='size-4' />
											</DropdownMenuTrigger>
											<DropdownMenuContent align='end'>
												<DropdownMenuLabel>Actions</DropdownMenuLabel>
												<DropdownMenuSeparator />
												<DropdownMenuItem asChild>
													<Link href={`/dashboard/banner/delete/${image.id}`}>Delete</Link>
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
