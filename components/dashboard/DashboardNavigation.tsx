'use client'

import { dashboardNavigationLinks } from '@/constants/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DashboardNavigation() {
	const pathName = usePathname()

	return (
		<>
			{dashboardNavigationLinks.map(({ href, name }) => (
				<Link
					href={href}
					key={href}
					className={`${
						pathName === href ? 'text-foreground underline-offset-8 underline font-black' : 'text-muted-foreground font-semibold'
					}  capitalize`}
				>
					{name}
				</Link>
			))}
		</>
	)
}
