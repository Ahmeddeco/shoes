import ThemeButton from '@/components/theme/ThemeButton'
import { Button } from '@/components/ui/button'
import {
	LoginLink,
	RegisterLink,
	LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components'

export default function HomePage() {
	return (
		<div className=''>
			<Button asChild>
				<LoginLink>Login</LoginLink>
			</Button>
			<Button asChild>
				<RegisterLink>Sign Up</RegisterLink>
			</Button>
			<Button asChild>
				<LogoutLink>Logout</LogoutLink>
			</Button>
			<ThemeButton />
		</div>
	)
}
