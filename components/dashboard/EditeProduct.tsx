'use client'

import Form from 'next/form'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ChevronLeftIcon, XIcon } from 'lucide-react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Switch } from '../ui/switch'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select'
import CategorySchema from '@/prisma/generated/inputTypeSchemas/CategorySchema'
import ProductStatusSchema from '@/prisma/generated/inputTypeSchemas/ProductStatusSchema'
import { toast } from 'sonner'
import Image from 'next/image'
import { UploadDropzone } from '@/utils/uploadthing'
import { useActionState, useEffect, useState } from 'react'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import ProductSchema from '@/schemas/ProductSchema'
import { editProduct } from '@/functions/productsActions'
import { type $Enums } from '@/lib/generated/prisma'
import SubmitButton from '../shared/SubmitButton'

type dataType = {
	data: {
		id: string
		name: string
		description: string
		status: $Enums.ProductStatus
		price: number
		images: string[]
		category: $Enums.Category
		isFeatured: boolean | null
		createdAt: Date
	}
}

export default function EditeProduct(data: dataType) {
	const [lastResult, action] = useActionState(editProduct, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ProductSchema })
		},
		shouldValidate: 'onBlur',
		shouldRevalidate: 'onInput',
	})

	const [images, setImages] = useState<string[]>([])
	useEffect(() => {
		setImages(data.data.images)
	}, [])
	const handleDelete = (index: number) => {
		setImages(images.filter((_, i) => i !== index))
	}

	return (
		<Form id={form.id} onSubmit={form.onSubmit} action={action}>
			<div className='flex items-center gap-4'>
				<Button variant={'outline'} size={'icon'} asChild>
					<Link href={`/dashboard/products`}>
						<ChevronLeftIcon className='size-4' />
					</Link>
				</Button>
				<h1 className='text-xl font-semibold tracking-tight'> Product</h1>
			</div>

			{/* ---------------------------------- Card ---------------------------------- */}

			<Card className='mt-5'>
				<CardHeader>
					<CardTitle>product details</CardTitle>
					<CardDescription>
						In this form you can edit your product.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='flex flex-col gap-6'>
						{/* -------------------------------- productId ------------------------------- */}
						<Input type='hidden' name='productId' value={data.data.id} />

						{/* ---------------------------------- name ---------------------------------- */}
						<div className='flex flex-col gap-3'>
							<Label>name</Label>
							<Input
								type='text'
								key={fields.name.key}
								name={fields.name.name}
								defaultValue={data.data.name}
								placeholder='Product Name'
							/>
							<p className='text-destructive'>{fields.name.errors}</p>
						</div>

						{/* ------------------------------- description ------------------------------ */}
						<div className='flex flex-col gap-3'>
							<Label>description</Label>
							<Textarea
								placeholder='Description'
								key={fields.description.key}
								name={fields.description.name}
								defaultValue={data.data.description}
							/>
							<p className='text-destructive'>{fields.description.errors}</p>
						</div>

						{/* ---------------------------------- price --------------------------------- */}
						<div className='flex flex-col gap-3'>
							<Label>price</Label>
							<Input
								type='number'
								placeholder='$45'
								key={fields.price.key}
								name={fields.price.name}
								defaultValue={data.data.price}
							/>
							<p className='text-destructive'>{fields.price.errors}</p>
						</div>

						{/* -------------------------------- featured -------------------------------- */}
						<div className='flex flex-col gap-3'>
							<Label>featured product</Label>
							<Switch
								key={fields.isFeatured.key}
								name={fields.isFeatured.name}
								defaultChecked={data.data.isFeatured ?? false}
							/>
							<p className='text-destructive'>{fields.isFeatured.errors}</p>
						</div>

						{/* --------------------------------- status --------------------------------- */}
						<div className='flex flex-col gap-3'>
							<Label>status</Label>
							<Select
								key={fields.status.key}
								name={fields.status.name}
								defaultValue={data.data.status}
							>
								<SelectTrigger className='w-full'>
									<SelectValue placeholder='Select Status' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value={ProductStatusSchema.Enum.archived}>
										{ProductStatusSchema.Enum.archived}
									</SelectItem>
									<SelectItem value={ProductStatusSchema.Enum.draft}>
										{ProductStatusSchema.Enum.draft}
									</SelectItem>
									<SelectItem value={ProductStatusSchema.Enum.published}>
										{ProductStatusSchema.Enum.published}{' '}
									</SelectItem>
								</SelectContent>
							</Select>
							<p className='text-destructive'>{fields.status.errors}</p>
						</div>

						{/* -------------------------------- category -------------------------------- */}

						<div className='flex flex-col gap-3'>
							<Label>category</Label>
							<Select
								key={fields.category.key}
								name={fields.category.name}
								defaultValue={data.data.category}
							>
								<SelectTrigger className='w-full'>
									<SelectValue placeholder='Select Status' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value={CategorySchema.Enum.kids}>
										{CategorySchema.Enum.kids}
									</SelectItem>
									<SelectItem value={CategorySchema.Enum.men}>
										{CategorySchema.Enum.men}
									</SelectItem>
									<SelectItem value={CategorySchema.Enum.women}>
										{CategorySchema.Enum.women}
									</SelectItem>
								</SelectContent>
							</Select>
							<p className='text-destructive'>{fields.category.errors}</p>
						</div>

						{/* --------------------------------- Images --------------------------------- */}
						<div className='flex flex-col gap-3 '>
							<Label>Images</Label>
							<Input
								type='hidden'
								value={images}
								key={fields.images.key}
								name={fields.images.name}
							/>
							{images.length > 0 ? (
								<div className='flex gap-5'>
									{images.map((image, i) => (
										<div className='relative size-32' key={i}>
											<Image
												src={image}
												alt={'product'}
												fill
												className='object-cover rounded-l-lg border'
											/>
											<Button
												size={'icon'}
												variant={'destructive'}
												className='absolute -top-3 -right-3'
												onClick={() => handleDelete(i)}
												type='button'
											>
												<XIcon className='size-3 ' />
											</Button>
										</div>
									))}
								</div>
							) : (
								<UploadDropzone
									endpoint={'imageUploader'}
									onClientUploadComplete={(res) => {
										toast.success('Images has been created successful.')
										setImages(res.map((r) => r.ufsUrl))
									}}
									onUploadError={() => {
										toast.error('Something went wrong.')
									}}
								/>
							)}
							<p className='text-destructive'>{fields.images.errors}</p>
						</div>
					<SubmitButton title={ 'edit product' }  />
					</div>
				</CardContent>
			</Card>
		</Form>
	)
}
