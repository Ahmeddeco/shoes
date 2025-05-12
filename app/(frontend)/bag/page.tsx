import { DeleteItemButton } from '@/components/shared/SubmitButton'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { deleteItem } from '@/functions/bagActions'
import { redis } from '@/lib/redis'
import { Cart } from '@/types/cart'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { ShoppingBag } from 'lucide-react'
import Form from 'next/form'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function BagPage() {
	const { getUser } = getKindeServerSession()
	const user = await getUser()
	if (!user) {
		redirect('/')
	}

	const cart: Cart | null = await redis.get(`cart-${user.id}`)

	let totalPrice = 0
	cart?.items.forEach((item) => {
		totalPrice += item.price * item.quantity
	})

	return (
		<Card className='max-w-2xl mx-auto mt-10 h-[80vh] w-full overflow-auto'>
			{cart?.items.length === 0 ? (
				<div className='h-full flex flex-col gap-4 items-center justify-center'>
					<ShoppingBag className='size-24' />
					<h2 className='capitalize font-semibold text-xl '>
						you do not have any products in your bag.
					</h2>
					<p className='text-center md:px-12 p-2 text-muted-foreground'>
						You currently do not have any products in your shopibg bag. Please
						add some so that you can see them right here.
					</p>
				</div>
			) : (
				<div className='flex flex-col gap-10'>
					{cart?.items.map((item) => (
						<CardContent key={item.id}>
							<div className='flex md:flex-row flex-col  gap-4 w-full  '>
								<div className='size-32 md:aspect-video aspect-square relative md:w-1/3  w-full'>
									<Image
										src={item.imageString}
										alt={item.name}
										fill
										className='rounded-md object-cover'
									/>
								</div>
								<div className=' flex justify-between font-medium capitalize md:w-2/3 w-full'>
									<p className=''>{item.name}</p>
									<div className='flex flex-col justify-between'>
										<p>
											{item.quantity} x {item.price} $
										</p>
										<Form action={deleteItem} className='text-end'>
											<Input type='hidden' name='productId' value={item.id} />
											<DeleteItemButton />
										</Form>
									</div>
								</div>
							</div>
						</CardContent>
					))}
					<CardFooter className=' w-full flex flex-col gap-12'>
						<div className='flex w-full items-center justify-between font-medium'>
							<p className='text-lg font-bold capitalize text-primary'>
								Subtotal
							</p>
							<Button size={'sm'}>
								{new Intl.NumberFormat('en-US').format(totalPrice)} $
							</Button>
						</div>
						<Button size={'full'}>checkout</Button>
					</CardFooter>
				</div>
			)}
		</Card>
	)
}
