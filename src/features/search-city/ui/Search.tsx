import { useState } from 'react'

export const Search = ({ onSearch }: { onSearch: (city: string) => void }) => {
	const [city, setCity] = useState('')

	return (
		<div className='flex gap-2'>
			<input
				type='text'
				placeholder='Shahar nomi...'
				value={city}
				onChange={e => setCity(e.target.value)}
				className='p-2 border rounded'
			/>
			<button
				onClick={() => onSearch(city)}
				className='bg-primary text-white px-4 rounded'
			>
				Qidirish
			</button>
		</div>
	)
}
