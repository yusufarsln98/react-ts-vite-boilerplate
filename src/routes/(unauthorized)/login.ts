import Login from '@/pages/login'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

export const Route = createFileRoute('/(unauthorized)/login')({
	validateSearch: z.object({
		redirect: z.string().optional(),
	}),
}).update({
	component: Login,
})
