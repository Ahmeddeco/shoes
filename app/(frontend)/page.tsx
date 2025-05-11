import CategorySelection from '@/components/frontend/home/CategorySelection'
import FeaturedProducts from '@/components/frontend/home/FeaturedProducts'
import Hero from '@/components/frontend/home/Hero'

export default function HomePage() {
	return (
		<>
			<Hero />
			<CategorySelection />
			<FeaturedProducts />
		</>
	)
}
