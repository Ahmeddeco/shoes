import { prisma } from '@/lib/prisma'
import ProductCard from './ProductCard'

const getData = async () => {
	const data = await prisma.product.findMany({
		where: {
			status: 'published',
			isFeatured: true,
		},
		select: {
			id: true,
			name: true,
			description: true,
			images: true,
			price: true,
		},
		orderBy: {
			createdAt: 'desc',
		},
		take: 3,
	})
	return data
}

export default async function FeaturedProducts() {
	const data = await getData()

	return (
		<section>
			<h2 className='text-2xl font-extrabold tracking-tight capitalize '>
				featured items
			</h2>
			<div className='my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
				{data.map((item) => (
					<ProductCard key={item.id} data={item} />
				))}
			</div>
		</section>
	)
}
