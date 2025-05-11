'use client'

import Image from 'next/image'
import { useState } from 'react'

type dataType = {
	images: string[]
}

export default function ImageSlider({ images }: dataType) {
	const [image, setImage] = useState(0)

	return (
		<div className='grid gap-2 items-start '>
			<div className='relative overflow-hidden  rounded-lg h-[65vh]'>
				<Image
					src={images[image]}
					alt={'product'}
					fill
					className='object-cover w-full'
				/>
			</div>
			<div className='h-[20vh] grid grid-cols-4 gap-4 p-2 rounded-lg overflow-x-auto'>
				{images.map((img, i) => (
					<div
						className={`${i===image?'ring-4  ring-primary':''} relative h-full aspect-square rounded-md `}
						key={i}
						onClick={() => setImage(i)}
					>
						<Image
							src={img}
							alt={'product'}
							fill
							className={`rounded-md object-cover `}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
