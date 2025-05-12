'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { Loader2, ShoppingBag } from 'lucide-react'

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
