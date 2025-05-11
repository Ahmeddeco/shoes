'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type dataType = {
	data: {
		id: string
		name: string
		description: string
		price: number
		images: string[]
	}
}
export default function ProductCard({ data }: dataType) {
	return (
		<Card>
			<CardContent>
				<Carousel
					className='w-full mx-auto'
					plugins={[
						Autoplay({
							delay: 4000,
						}),
					]}
				>
					<CarouselContent>
						{data.images.map((item, i) => (
							<CarouselItem key={i}>
								<div className='relative h-[330px]'>
									<Image
										src={item}
										alt={'ProductCard'}
										fill
										className='rounded-lg object-cover object-center'
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>

				{/* ---------------------------------- text ---------------------------------- */}
				<div className='flex flex-col gap-4'>
					<div className='flex justify-between items-center mt-4'>
						<h1 className='capitalize text-xl font-semibold'>{data.name}</h1>
						<h3 className='capitalize inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring ring-primary/40'>
							${data.price}
						</h3>
					</div>
					<p className='text-muted-foreground text-sm text-balance line-clamp-3'>
						{data.description}
					</p>
					<Button asChild>
						<Link href={`/product/${data.id}`}>learn more</Link>
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}
