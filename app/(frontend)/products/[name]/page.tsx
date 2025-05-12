import ProductCard from '@/components/frontend/home/ProductCard'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

enum Category {
	all = 'all',
	men = 'men',
	women = 'women',
	kids = 'kids',
}

const getData = async (name: Category) => {
	switch (name) {
		/* ----------------------------------- all ---------------------------------- */
		case Category.all:
			try {
				const data = await prisma.product.findMany({
					select: {
						name: true,
						images: true,
						price: true,
						id: true,
						description: true,
					},
					where: {
						status: 'published',
					},
				})
				return data
			} catch (error) {
				console.error(error)
			}
			break

		/* ----------------------------------- men ---------------------------------- */
		case Category.men:
			try {
				const data = await prisma.product.findMany({
					select: {
						name: true,
						images: true,
						price: true,
						id: true,
						description: true,
					},
					where: {
						status: 'published',
						category: Category.men,
					},
				})
				return data
			} catch (error) {
				console.error(error)
			}
			break

		/* ---------------------------------- women --------------------------------- */
		case Category.women:
			try {
				const data = await prisma.product.findMany({
					select: {
						name: true,
						images: true,
						price: true,
						id: true,
						description: true,
					},
					where: {
						status: 'published',
						category: Category.women,
					},
				})
				return data
			} catch (error) {
				console.error(error)
			}
			break

		/* ---------------------------------- kids ---------------------------------- */
		case Category.kids:
			try {
				const data = await prisma.product.findMany({
					select: {
						name: true,
						images: true,
						price: true,
						id: true,
						description: true,
					},
					where: {
						status: 'published',
						category: Category.kids,
					},
				})
				return data
			} catch (error) {
				console.error(error)
			}
			break
		default: {
			return notFound()
		}
	}
}

export default async function ProductsPage({
	params,
}: {
	params: Promise<{ name: Category }>
}) {
	const name = (await params).name
	const data = await getData(name)
	console.log('data for ' + name, data)
	return (
		<>
			<section>
				<h1 className='font-semibold text-3xl my-5 capitalize'>{`products for ${name}`}</h1>
				<div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
					{data?.map((item) => (
						<ProductCard data={item} key={item.id} />
					))}
				</div>
			</section>
		</>
	)
}
