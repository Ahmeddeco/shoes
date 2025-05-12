'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { Loader2, ShoppingBag, X } from 'lucide-react'

type SubmitButtonType = {
	title: string
	type?: 'button' | 'submit' | 'reset' | undefined
	size?: 'default' | 'sm' | 'lg' | 'icon' | 'wide' | 'full' | null | undefined
	variant?:
		| 'link'
		| 'default'
		| 'destructive'
		| 'outline'
		| 'secondary'
		| 'ghost'
		| null
		| undefined
}

/* ------------------------------ SubmitButton ------------------------------ */
export function SubmitButton({
	title,
	type = 'submit',
	size = 'full',
	variant,
}: SubmitButtonType) {
	const { pending } = useFormStatus()

	return (
		<>
			{pending ? (
				<Button disabled variant={variant} size={size}>
					<Loader2 className='size-4 animate-spin' />
					please wait
				</Button>
			) : (
				<Button type={type} size={size} variant={variant}>
					{title}
				</Button>
			)}
		</>
	)
}

/* ---------------------------- ShoppingBagButton --------------------------- */
export function ShoppingBagButton() {
	const { pending } = useFormStatus()
	return (
		<>
			{pending ? (
				<Button disabled size={'full'}>
					<Loader2 className='size-5 animate-spin' /> please wait
				</Button>
			) : (
				<Button type='submit' size={'full'}>
					<ShoppingBag className='size-5' /> Add to Cart
				</Button>
			)}
		</>
	)
}

/* ---------------------------- deleteItemButton ---------------------------- */
export function DeleteItemButton() {
	const { pending } = useFormStatus()
	return (
		<>
			{pending ? (
				<Button disabled size={'sm'} variant={'destructive'}>
					<Loader2 className='size-5 animate-spin' /> removing ...
				</Button>
			) : (
				<Button type='submit' size={'sm'} variant={'destructive'}>
					delete
				</Button>
			)}
		</>
	)
}
