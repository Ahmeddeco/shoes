import Navbar from '@/components/layout/FrontHeader'

export default function FrontEndLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Navbar />
			<main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{children}</main>
		</>
	)
}
