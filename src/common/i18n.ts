import i18n, { type InitOptions } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend, { type HttpBackendOptions } from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import translationEN from '../assets/locales/en/translations.json'
import translationTR from '../assets/locales/tr/translations.json'
// import { isProduction } from './utils'

export const defaultNS = 'translations'
export const resources = {
	en: { translations: translationEN },
	tr: { translations: translationTR },
} as const

const i18nOptions: InitOptions<HttpBackendOptions> = {
	defaultNS,
	ns: [defaultNS],
	debug: true,
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	},
	backend: {
		loadPath: false
			? 'locales/{{lng}}/translations.json'
			: 'src/assets/locales/{{lng}}/translations.json',
	},
}

void i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(Backend)
	.init<HttpBackendOptions>(i18nOptions)
