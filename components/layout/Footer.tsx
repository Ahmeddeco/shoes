import React from 'react'
import Logo from './Logo'

export default function Footer() {
	return <footer className='h-72 mt-24 bg-card  border-t'>
		<div className="container mx-auto py-8 flex flex-col gap-4">
			<Logo />
			<p className="capitalize text-xs text-muted-foreground">©️ 2025 AhmedShoe. All rights reserved</p>
		</div>
	</footer>
}
