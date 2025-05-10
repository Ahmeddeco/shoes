import SubmitButton from '@/components/shared/SubmitButton'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { deleteBanner } from '@/functions/bannerActions'
import Form from 'next/form'
import Link from 'next/link'

export default async function DeletePage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const id = (await params).id

	return (
		<div className='h-[80vh] w-full flex items-center justify-center'>
			<Card className='w-full max-w-xl'>
				<CardHeader>
					<CardTitle>are you sure?</CardTitle>
					<CardDescription>
						this action cannot be undone. This will permanently delete this
						product and remove all data from our servers.
					</CardDescription>
				</CardHeader>
				<CardFooter className='flex items-center justify-between'>
					<Button variant={'secondary'} size={'default'} asChild>
						<Link href={'/dashboard/products'}>cancel</Link>
					</Button>
					<Form action={deleteBanner}>
						<Input name='bannerId' type='hidden' value={id} />
						<SubmitButton
							title={'delete'}
							size={'default'}
							variant={'destructive'}
						/>
					</Form>
				</CardFooter>
			</Card>
		</div>
	)
}
