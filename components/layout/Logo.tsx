import Link from 'next/link'

export default function Logo() {
	return (
		<div className='flex items-center hover:scale-105 duration-700 ease-in-out'>
			<Link href={`/`}>
				<h1 className='capitalize font-bold text-xl lg:text-3xl'>
					ahmed<span className='capitalize text-primary'>shoe</span>
				</h1>
			</Link>
		</div>
	)
}
