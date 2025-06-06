import FeaturedProducts from '@/components/frontend/home/FeaturedProducts'
import ImageSlider from '@/components/frontend/home/ImageSlider'
import { ShoppingBagButton } from '@/components/shared/SubmitButton'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { addItem } from '@/functions/bagActions'
import { prisma } from '@/lib/prisma'
import { StarHalf, StarIcon } from 'lucide-react'
import Form from 'next/form'
import { notFound } from 'next/navigation'

const getData = async (productId: string) => {
	const data = await prisma.product.findUnique({
		where: { id: productId },
		select: {
			price: true,
			images: true,
			description: true,
			name: true,
			id: true,
		},
	})

	return data
}

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const id = (await params).id
	const data = await getData(id)

	if (!data) {
		return notFound()
	}

	const addProducttoShoppingCart = addItem.bind(null, data.id)

	return (
		<>
			<section className='grid grid-cols-1 md:grid-cols-2 gap-6  '>
				<Card>
					<CardContent>
						<ImageSlider images={data.images} />
					</CardContent>
				</Card>
				<Card>
					<CardContent className=' flex flex-col gap-2'>
						<h1 className='capitalize text-3xl font-extrabold tracking-tight'>
							{data.name}
						</h1>
						<p className='text-3xl '>${data.price}</p>
						<div className='flex items-center gap-1'>
							<StarIcon className='size-4 ' fill='gold' />
							<StarIcon className='size-4 ' fill='gold' />
							<StarIcon className='size-4 ' fill='gold' />
							<StarIcon className='size-4 ' fill='gold' />
							<StarHalf className='size-4 ' fill='gold' />
						</div>
						<p className='text-pretty text-muted-foreground '>
							{data.description}
						</p>
						<Form action={addProducttoShoppingCart}>
							<ShoppingBagButton />
						</Form>
					</CardContent>
				</Card>
			</section>
			<Separator />
			<div>
				<FeaturedProducts />
			</div>
		</>
	)
}
