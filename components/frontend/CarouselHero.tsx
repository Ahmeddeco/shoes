'use client'

import React from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

type dataType = {
	data: {
		title: string
		id: string
		imageString: string
		createdAt: Date
	}[]
}

export default function CarouselHero({ data }: dataType) {
	console.log('data', data)
	return (
		<Carousel
			plugins={[
				Autoplay({
					delay: 8000,
				}),
			]}
		>
			<CarouselContent>
				{data.map((image) => (
					<CarouselItem key={image.id}>
						<div className='relative h-[60vh] lg:h-[80vh] '>
							<Image
								src={image.imageString}
								alt={'banner'}
								fill
								className='object-cover rounded-xl'
							/>
							<div className='absolute top-6 left-6 bg-background/75 p-6 rounded-xl shadow-lg '>
								<h1 className='text-xl lg:text-4xl font-bold'>{image.title}</h1>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
