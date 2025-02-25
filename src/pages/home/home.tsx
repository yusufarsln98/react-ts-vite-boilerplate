import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
	const { t, i18n } = useTranslation()
	const [currentLang, setCurrentLang] = useState(i18n.language)

	const toggleLanguage = () => {
		const newLang = currentLang === 'en' ? 'tr' : 'en'
		i18n.changeLanguage(newLang)
		setCurrentLang(newLang)
	}

	return (
		<div className='w-full h-[100vh] flex flex-col items-center justify-center'>
			<h1>{t('home.greeting')}</h1>
			<button onClick={toggleLanguage}>
				{currentLang === 'en' ? 'Değiştir' : 'Switch'}
			</button>
		</div>
	)
}

export default Home
