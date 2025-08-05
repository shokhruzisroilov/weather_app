import { useEffect, useState } from 'react'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

	useEffect(() => {
		document.documentElement.className = theme
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<div className={theme}>
			<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
				Toggle Theme
			</button>
			{children}
		</div>
	)
}
