import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/react-router'
import type { MainRouter } from './main'

const queryClient = new QueryClient()

type AppProps = { router: MainRouter }

const App = ({ router }: AppProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

export default App
