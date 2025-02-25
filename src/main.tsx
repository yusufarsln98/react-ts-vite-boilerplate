import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.tsx'
import './styles/main.css'
import './styles/tailwind.css'
import { createRouter, ErrorComponent } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.ts'

const router = createRouter({
	routeTree: routeTree,
	defaultPendingComponent: () => <div></div>,
	defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
	defaultPreload: 'intent',
	scrollRestoration: true,
})

export type MainRouter = typeof router
declare module '@tanstack/react-router' {
	interface Register {
		router: MainRouter
	}
}

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<React.Suspense fallback='loading'>
			<App router={router} />
		</React.Suspense>
	</React.StrictMode>
)
