import { prisma } from '@/lib/prisma'
import CarouselHero from './CarouselHero'


const getData = async () => {
	const data = await prisma.banner.findMany({
		orderBy: { createdAt: 'desc' },
	})
	return data
}

export default async function Hero() {
	const data = await getData()

	return (
		<CarouselHero data={data} />
	)
}
