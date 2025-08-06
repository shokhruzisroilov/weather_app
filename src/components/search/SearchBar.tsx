import { FaSearch } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface SearchBarProps {
	value: string
	onChange: (value: string) => void
	onSearch: () => void
}

export const SearchBar = ({ value, onChange, onSearch }: SearchBarProps) => {
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onSearch()
		}
	}

	return (
		<motion.form
			onSubmit={e => {
				e.preventDefault()
				onSearch()
			}}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='w-full max-w-2xl mx-auto px-4 sm:px-0'
		>
			<motion.div
				className='flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-600'
				whileHover={{ scale: 1.02 }}
				transition={{ type: 'spring', stiffness: 100 }}
			>
				<label htmlFor='search-input' className='sr-only'>
					Shahar nomi
				</label>

				<input
					id='search-input'
					type='text'
					placeholder='Shahar nomini kiriting...'
					value={value}
					onChange={e => onChange(e.target.value)}
					onKeyDown={handleKeyDown}
					className='flex-1 px-4 py-2 text-sm sm:text-base rounded-lg bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary'
				/>

				<motion.button
					type='submit'
					whileTap={{ scale: 0.95 }}
					className='flex items-center gap-2 bg-primary hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-sm text-sm sm:text-base'
					aria-label='Qidirish'
				>
					<FaSearch className='text-base' />
					<span className='hidden sm:inline'>Qidirish</span>
				</motion.button>
			</motion.div>
		</motion.form>
	)
}
