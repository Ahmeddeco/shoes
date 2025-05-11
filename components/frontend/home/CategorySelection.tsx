import Link from 'next/link'
import React from 'react'
import { Button } from '../../ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

export default function CategorySelection() {
	return (
		<section className=''>
			<div className='flex items-center justify-between'>
				<h1 className='capitalize text-2xl font-extrabold tracking-tight'>
					shop by category
				</h1>
				<Link
					href={'/products/all'}
					className='flex items-center gap-1 text-primary hover:scale-95 duration-700 ease-in-out'
				>
					Browse All Products
					<ArrowRightIcon />
				</Link>
			</div>

			<div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 '>
				{/* ------------------------------- all image ------------------------------ */}
				<Link
					href={'/products/all'}
					className='relative rounded-xl overflow-hidden sm:row-span-2 row-span-1 hover:scale-95 duration-700 ease-in-out aspect-square sm:aspect-auto'
				>
					<Card className='h-full p-0'>
						<div className='h-full relative'>
							<Image
								src='/all.webp'
								alt={'all products'}
								className='object-cover object-bottom mask-b-from-slate-950'
								fill
							/>
							<div className='absolute p-6 flex flex-col  bottom-20 left-6 '>
								<h3 className='capitalize font-semibold'>All products</h3>
								<p className='text-sm'>Shop Now</p>
							</div>
						</div>
					</Card>
				</Link>

				{/* ------------------------------ men image ------------------------------ */}
				<Link
					href={'/products/men'}
					className='relative  rounded-xl overflow-hidden  row-span-1 hover:scale-95 duration-700 ease-in-out sm:aspect-2/1 aspect-square'
				>
					<Card className='h-full p-0'>
						<div className='h-full relative'>
							<Image
								src='/men.webp'
								alt={'all products'}
								className='object-cover mask-b-from-slate-950'
								fill
							/>
							<div className='absolute p-6 flex flex-col  bottom-0 left-6 '>
								<h3 className='capitalize font-semibold'>men products</h3>
								<p className='text-sm'>Shop Now</p>
							</div>
						</div>
					</Card>
				</Link>

				{/* ------------------------------ women image ------------------------------ */}
				<Link
					href={'/products/women'}
					className='relative  rounded-xl overflow-hidden  row-span-1 hover:scale-95 duration-700 ease-in-out sm:aspect-2/1 aspect-square'
				>
					<Card className='h-full p-0'>
						<div className='h-full w-full relative'>
							<Image
								src='/women.webp'
								alt={'all products'}
								className='object-cover mask-b-from-slate-950'
								fill
							/>
							<div className='absolute p-6 flex flex-col  bottom-0 left-6 '>
								<h3 className='capitalize font-semibold'>women products</h3>
								<p className='text-sm'>Shop Now</p>
							</div>
						</div>
					</Card>
				</Link>
			</div>
		</section>
	)
}
