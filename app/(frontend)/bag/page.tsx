import { Card, CardContent } from '@/components/ui/card'
import { redis } from '@/lib/redis'
import { Cart } from '@/types/cart'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function BagPage() {
	const { getUser } = getKindeServerSession()
	const user = await getUser()
	if (!user) {
		redirect('/')
	}

	const cart: Cart | null = await redis.get(`cart-${user.id}`)

	return (
		<Card className='max-w-2xl mx-auto mt-10 h-[80vh] w-full overflow-auto'>
			{cart?.items.length === 0 ? (
				<div className=''>
					<h1>nothing in a shopping bag</h1>
				</div>
			) : (
				<div className='flex flex-col gap-10'>
					{cart?.items.map((item) => (
						<CardContent key={item.id}>
							<div
								className='flex md:flex-row flex-col  gap-4 w-full  '
								key={item.id}
							>
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
                  <div className="flex flex-col "></div>
								</div>
							</div>
						</CardContent>
					))}
				</div>
			)}
		</Card>
	)
}
