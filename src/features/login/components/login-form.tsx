import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(5, 'Password must be at least 5 characters'),
	remember: z.boolean().optional(),
})

type FormData = z.infer<typeof schema>

interface LoginFormProps {
	onSubmit: (data: FormData) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
	const form = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
			password: '',
			remember: false,
		},
	})

	return (
		<div
			style={{
				width: '100%',
				maxWidth: '400px',
				padding: '20px',
				boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
				borderRadius: '8px',
				backgroundColor: '#fff',
				textAlign: 'center',
			}}
		>
			<h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Welcome Back</h2>
			<p style={{ fontSize: '14px', color: '#666' }}>Login to your account</p>
			<form
				style={{ marginTop: '16px' }}
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<div style={{ marginBottom: '12px' }}>
					<label>Email</label>
					<input
						style={{
							width: '100%',
							padding: '8px',
							borderRadius: '4px',
							border: '1px solid #ccc',
						}}
						placeholder='Enter your email'
						{...form.register('email')}
						type='email'
					/>
				</div>
				<div style={{ marginBottom: '12px' }}>
					<label>Password</label>
					<input
						style={{
							width: '100%',
							padding: '8px',
							borderRadius: '4px',
							border: '1px solid #ccc',
						}}
						placeholder='Enter your password'
						{...form.register('password')}
						type='password'
					/>
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '8px',
						marginBottom: '12px',
					}}
				>
					<input
						type='checkbox'
						{...form.register('remember')}
					/>
					<label style={{ fontSize: '14px' }}>Remember me</label>
				</div>
				<button
					style={{
						width: '100%',
						padding: '10px',
						backgroundColor: '#007bff',
						color: '#fff',
						borderRadius: '4px',
						border: 'none',
						cursor: 'pointer',
					}}
					type='submit'
				>
					Login
				</button>
			</form>
		</div>
	)
}

export default LoginForm
