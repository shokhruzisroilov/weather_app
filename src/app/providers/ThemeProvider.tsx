import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<'light' | 'dark'>(
		() => (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
	)

	useEffect(() => {
		document.documentElement.classList.remove('light', 'dark')
		document.documentElement.classList.add(theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
	}

	return (
		<div className='min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-white'>
			<div className='p-4 flex justify-end'>
				<button
					onClick={toggleTheme}
					className='flex items-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200'
				>
					<span className='text-xl transition-transform duration-300'>
						{theme === 'light' ? <FaMoon /> : <FaSun />}
					</span>
					<span className='text-sm font-medium'>
						{theme === 'light' ? 'Tungi rejim' : 'Kunduzgi rejim'}
					</span>
				</button>
			</div>
			{children}
		</div>
	)
}
