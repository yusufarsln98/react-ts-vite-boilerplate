import type { defaultNS, resources } from './lib/utils/i18n'

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: typeof defaultNS
		resources: (typeof resources)['en']
	}
}
