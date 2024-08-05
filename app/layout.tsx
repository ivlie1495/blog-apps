import type { Metadata } from 'next'

import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'

import { roboto } from './fonts'

import './globals.css'

export const metadata: Metadata = {
	title: {
		template: '%s | Ivan Lie',
		default: 'Ivan Lie',
	},
	description: 'Ivan Lie Portfolio',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={roboto.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className="mt-12">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
