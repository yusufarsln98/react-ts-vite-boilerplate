import { Link } from '@tanstack/react-router'
import React from 'react'

const NotFound: React.FC = () => {
	return (
		<div className='flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
			<div className='w-full space-y-6 text-center'>
				<div className='space-y-3'>
					<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl animate-bounce'>
						404
					</h1>
					<p className='text-gray-500'>
						Looks like you're lost. The page you are looking for does not exist.
					</p>
				</div>
				<button>
					<Link to='/'>Return to Home</Link>
				</button>
			</div>
		</div>
	)
}

export default NotFound
