import { useRouter } from '@tanstack/react-router'
import { useLayoutEffect } from 'react'
import LoginForm from '@/features/login/components'
import { Route } from '@/routes/(unauthorized)/login'

const Login: React.FC = () => {
	const router = useRouter()
	const { auth, status } = Route.useRouteContext({
		select: ({ auth }) => ({ auth, status: auth.status }),
	})
	const search = Route.useSearch()
	const currentPath = router.history.location.pathname

	useLayoutEffect(() => {
		if (status === 'loggedIn') {
			if (currentPath === '/login') {
				router.history.push('/')
			} else if (search.redirect) {
				router.history.push(search.redirect)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status, search.redirect])

	return (
		<div className='w-full h-screen flex flex-col items-center justify-center bg-muted/50'>
			<LoginForm
				onSubmit={async (values) => {
					auth.login(values.email)
					await router.invalidate()
				}}
			/>
		</div>
	)
}

export default Login
