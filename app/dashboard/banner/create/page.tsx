'use client'

import SubmitButton from '@/components/shared/SubmitButton'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createBanner } from '@/functions/bannerActions'
import BannerSchema from '@/schemas/BannerSchema'
import { UploadDropzone } from '@/utils/uploadthing'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { ChevronLeftIcon, X } from 'lucide-react'
import Form from 'next/form'
import Image from 'next/image'
import Link from 'next/link'
import { useActionState, useState } from 'react'
import { toast } from 'sonner'

export default function CreatePage() {
	const [image, setImage] = useState<string>('')
	const handleDelete = () => setImage('')

	const [lastResult, action] = useActionState(createBanner, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: BannerSchema })
		},
		shouldValidate: 'onBlur',
		shouldRevalidate: 'onInput',
	})

	return (
		<>
			<div className='flex items-center gap-4'>
				<Button variant={'outline'} size={'icon'} asChild>
					<Link href={`/dashboard/products`}>
						<ChevronLeftIcon className='size-4' />
					</Link>
				</Button>
				<h1 className='text-xl font-semibold tracking-tight'>New Banner</h1>
			</div>

			{/* ---------------------------------- Form ---------------------------------- */}
			<Form id={form.id} onSubmit={form.onSubmit} action={action}>
				<Card className='mt-5'>
					<CardHeader>
						<CardTitle>Banner details</CardTitle>
						<CardDescription>Create your banner right here.</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='flex flex-col gap-6'>
							{/* ---------------------------------- title ---------------------------------- */}
							<div className='flex flex-col gap-3'>
								<Label>title</Label>
								<Input
									type='text'
									key={fields.title.key}
									name={fields.title.name}
									defaultValue={fields.title.initialValue}
									placeholder='Banner Name'
								/>
								<p className='text-destructive'>{fields.title.errors}</p>
							</div>

							<div className='flex flex-col gap-3'>
								<Label>Image</Label>
								<Input
									type='hidden'
									value={image}
									key={fields.imageString.key}
									name={fields.imageString.name}
									defaultValue={fields.imageString.initialValue}
								/>
								{image !== '' ? (
									<div className='relative size-96'>
										<Image
											src={image}
											alt={'banner'}
											fill
											className='object-cover rounded-lg'
										/>
										<Button
											className='absolute -top-3 -right-3'
											size={'icon'}
											variant={'destructive'}
											type='button'
											onClick={() => handleDelete()}
										>
											<X />
										</Button>
									</div>
								) : (
									<UploadDropzone
										endpoint={'bannerImageRoute'}
										onClientUploadComplete={(res) => {
											setImage(res[0].ufsUrl)

											toast.success(
												'Image uploaded successfully in uploadthing!'
											)
										}}
										onUploadError={() => {
											toast.error('Some thing went wrong in uploadthing!')
										}}
									/>
								)}
								<p className='text-destructive'>{fields.imageString.errors}</p>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<SubmitButton title={'create banner'} />
					</CardFooter>
				</Card>
			</Form>
		</>
	)
}
