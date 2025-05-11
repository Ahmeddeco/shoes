import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='h-dvh flex flex-col gap-4 items-center justify-center'>
			<h2 className='text-6xl font-black'>Not Found</h2>
			<p className='text-muted-foreground'>Could not find requested resource</p>
			<Link href='/'>
				<Button>Return Home</Button>
			</Link>
		</div>
	)
}
