'use client'

import { frontNavigationLinks } from '@/constants/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
	const pathName = usePathname()

	return (
		<>
			{frontNavigationLinks.map(({ href, title }, i) => (
				<Link
					href={href}
					key={i}
					className={`${
						pathName === href
							? 'font-semibold underline-offset-4 underline text-primary'
							: 'font-normal text-muted-foreground hover:text-foreground duration-500 ease-in-out'
					} capitalize text-lg`}
				>
					{title}
				</Link>
			))}
		</>
	)
}
