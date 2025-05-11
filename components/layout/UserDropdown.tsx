import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IsUser } from '@/functions/authUser'
import { User2 } from 'lucide-react'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import Image from 'next/image'

export default async function UserDropdown() {
	const user = await IsUser()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				{user?.picture ? (
					<div className='relative size-9'>
						<Image
							src={user?.picture}
							alt={'user'}
							fill
							className='rounded-full object-cover border-2 cursor-pointer'
						/>
					</div>
				) : (
					<User2 className='size-6' />
				)}
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' forceMount>
				<DropdownMenuLabel className='flex flex-col gap-1'>
					<p className='text-sm'>
						{user?.given_name} {user?.family_name}
					</p>
					<p className='text-xs text-muted-foreground'>{user?.email} </p>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogoutLink>Log out</LogoutLink>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
