import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
	return (
		<div className='h-dvh mx-auto flex items-center justify-center'>
			<Skeleton className='w-[50vh] aspect-square animate-pulse' />
		</div>
	)
}
