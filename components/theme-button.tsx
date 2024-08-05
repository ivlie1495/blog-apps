'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

const ThemeButton = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, systemTheme, setTheme } = useTheme()
	const currentTheme = theme === 'system' ? systemTheme : theme

	const handleThemeChange = (theme: string) => {
		setTheme(theme)
	}

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() =>
				handleThemeChange(currentTheme === 'dark' ? 'light' : 'dark')
			}
		>
			{currentTheme === 'dark' ? (
				<Sun className="h-5 w-5" />
			) : (
				<Moon className="h-5 w-5" />
			)}
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}

export default ThemeButton
