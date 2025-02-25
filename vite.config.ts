import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'tailwind.config.js': path.resolve(__dirname, 'tailwind.config.js'),
		},
	},
	optimizeDeps: {
		include: ['tailwind.config.js'],
	},
})
