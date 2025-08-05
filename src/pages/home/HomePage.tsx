import { useState } from 'react'
import { Search } from '../../features/search-city/ui/Search'
import { WeatherCard } from '../../entities/weather/ui/WeatherCard'

export const HomePage = () => {
	const [city, setCity] = useState('Tashkent')
	console.log(city)

	return (
		<main className='p-4'>
			<Search onSearch={setCity} />
			<WeatherCard city={city} />
		</main>
	)
}
