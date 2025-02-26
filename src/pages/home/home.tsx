import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '@/components/language-switcher'

const Home: React.FC = () => {
	const { t } = useTranslation()

	return (
		<div className='w-full h-screen flex flex-col items-center justify-center'>
			<h1 className='text-2xl font-bold mb-4'>{t('home.greeting')}</h1>
			<LanguageSwitcher />
		</div>
	)
}

export default Home
