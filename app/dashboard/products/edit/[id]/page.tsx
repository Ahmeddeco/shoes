import EditeProduct from '@/components/dashboard/EditeProduct'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

const getData = async (productId: string) => {
	const data = await prisma.product.findUnique({
		where: { id: productId },
	})
	return data
}

export default async function EditProductPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const id = (await params).id
	const data = await getData(id)
	if (!data) {
		notFound()
	}
	console.log('data', data)

	return <EditeProduct data={data} />
}
