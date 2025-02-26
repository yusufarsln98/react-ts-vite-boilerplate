import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation()

	const toggleLanguage = () => {
		const newLang = i18n.language === 'en' ? 'tr' : 'en'
		i18n.changeLanguage(newLang)
	}

	return (
		<button
			onClick={toggleLanguage}
			className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition'
		>
			{i18n.language === 'en' ? 'Değiştir' : 'Switch'}
		</button>
	)
}

export default LanguageSwitcher
