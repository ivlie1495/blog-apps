'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

const ThemeButton = () => {
	const { theme, setTheme } = useTheme()

	const handleThemeChange = (theme: string) => {
		setTheme(theme)
	}

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => handleThemeChange(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? (
				<Sun className="h-5 w-5" />
			) : (
				<Moon className="h-5 w-5" />
			)}
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}

export default ThemeButton
