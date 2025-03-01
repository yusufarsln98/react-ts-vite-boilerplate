import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/react-router'
import React from 'react'
import { auth } from './lib/utils/auth'
import type { MainRouter } from './main'

const queryClient = new QueryClient()

type AppProps = { router: MainRouter }

const App: React.FC<AppProps> = ({ router }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider
				router={router}
				context={{
					auth: auth,
				}}
			/>
		</QueryClientProvider>
	)
}

export default App
