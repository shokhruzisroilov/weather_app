import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export const Search = ({ onSearch }: { onSearch: (city: string) => void }) => {
	const [city, setCity] = useState('')

	const handleSearch = () => {
		if (city.trim() !== '') {
			onSearch(city)
		}
	}

	return (
		<div className='flex items-center gap-3 w-full max-w-md mx-auto p-4'>
			<input
				type='text'
				placeholder='Shahar nomi...'
				value={city}
				onChange={e => setCity(e.target.value)}
				className='flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
			/>
			<button
				onClick={handleSearch}
				className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md'
			>
				<FaSearch />
				Qidirish
			</button>
		</div>
	)
}
