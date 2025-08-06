import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '../redux/theme/themeSelectors'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const theme = useSelector(selectTheme)

	useEffect(() => {
		document.documentElement.classList.remove('light', 'dark')
		document.documentElement.classList.add(theme)
	}, [theme])

	return (
		<div className='min-h-screen transition-colors duration-300 text-black dark:text-white bg-white dark:bg-[#0f172a]'>
			{children}
		</div>
	)
}
