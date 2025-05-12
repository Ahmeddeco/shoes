import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/FrontHeader'

export default function FrontEndLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Navbar />
			<main className='container mx-auto px-4 flex flex-col gap-24 mt-18'>{children}</main>
			<Footer />
		</>
	)
}
