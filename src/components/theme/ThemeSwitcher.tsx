import { FaMoon, FaSun } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../redux/theme/themeSlice'
import { selectTheme } from '../../redux/theme/themeSelectors'
import { motion } from 'framer-motion'

export const ThemeSwitcher = () => {
	const theme = useSelector(selectTheme)
	const dispatch = useDispatch()

	return (
		<motion.button
			onClick={() => dispatch(toggleTheme())}
			whileTap={{ scale: 0.95 }}
			whileHover={{ scale: 1.05 }}
			className='flex items-center gap-2 bg-primary/10 dark:bg-primary/20 border border-primary/30 text-primary dark:text-white px-3 py-2 rounded-full shadow hover:bg-primary/20 dark:hover:bg-primary/30 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200'
			aria-label='Mavzuni almashtirish'
		>
			<span className='text-xl'>
				{theme === 'light' ? <FaMoon /> : <FaSun />}
			</span>

			<span className='hidden md:inline text-sm font-medium'>
				{theme === 'light' ? 'Tungi rejim' : 'Kunduzgi rejim'}
			</span>
		</motion.button>
	)
}
