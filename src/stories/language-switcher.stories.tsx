import type { Meta, StoryObj } from '@storybook/react'
import LanguageSwitcher from '@/components/language-switcher'

const meta: Meta<typeof LanguageSwitcher> = {
	title: 'Components/LanguageSwitcher',
	component: LanguageSwitcher,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LanguageSwitcher>

export const Default: Story = {
	args: {},
}

export const WithCustomStyle: Story = {
	args: {
		className: 'custom-style',
	},
}
