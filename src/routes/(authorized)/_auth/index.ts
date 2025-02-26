import Home from '@/pages/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(authorized)/_auth/')({
	component: Home,
})
