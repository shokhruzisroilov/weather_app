import { useState } from 'react'
import {
	FaTemperatureHigh,
	FaTint,
	FaWind,
	FaSearch,
	FaCloudSun,
} from 'react-icons/fa'
import { useWeather } from '../hooks/useWeather'
import { fetchForecast } from '../api/weatherApi'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'

export const HomePage = () => {
	const [city, setCity] = useState('Tashkent')

	const { data: weatherData, isLoading, isError } = useWeather(city)
	const { data: forecastData } = useQuery({
		queryKey: ['forecast', city],
		queryFn: () => fetchForecast(city),
	})

	const [input, setInput] = useState('')

	const handleSearch = () => {
		if (input.trim() !== '') {
			setCity(input)
		}
	}

	return (
		<main className='min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 p-6 text-gray-800 dark:text-gray-100'>
			<div className='max-w-2xl mx-auto text-center space-y-6'>
				<h1 className='text-4xl font-bold text-primary'>Ob-havo ilovasi</h1>

				{/* Search */}
				<div className='flex gap-3 items-center justify-center'>
					<input
						type='text'
						placeholder='Shahar nomi...'
						value={input}
						onChange={e => setInput(e.target.value)}
						onKeyDown={e => e.key === 'Enter' && handleSearch()}
						className='w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary'
					/>
					<button
						onClick={handleSearch}
						className='flex items-center gap-2 bg-primary hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-all shadow-md'
					>
						<FaSearch />
						Qidirish
					</button>
				</div>

				{/* Weather Card */}
				{isLoading ? (
					<p>Yuklanmoqda...</p>
				) : isError || !weatherData ? (
					<p className='text-red-500'>Xatolik yuz berdi!</p>
				) : (
					<div className='bg-gradient-to-br from-primary to-sky-700 text-white p-6 rounded-2xl shadow-xl'>
						<h2 className='text-2xl font-semibold mb-4'>{weatherData.name}</h2>

						<div className='flex items-center gap-3 mb-3'>
							<FaTemperatureHigh className='text-xl' />
							<p className='text-lg'>
								Harorat:{' '}
								<span className='font-medium'>{weatherData.main.temp}°C</span>
							</p>
						</div>

						<div className='flex items-center gap-3 mb-3'>
							<FaTint className='text-xl' />
							<p className='text-lg'>
								Namlik:{' '}
								<span className='font-medium'>
									{weatherData.main.humidity}%
								</span>
							</p>
						</div>

						<div className='flex items-center gap-3'>
							<FaWind className='text-xl' />
							<p className='text-lg'>
								Shamol:{' '}
								<span className='font-medium'>
									{weatherData.wind.speed} m/s
								</span>
							</p>
						</div>
					</div>
				)}

				{/* Forecast Cards */}
				{forecastData && (
					<>
						<h3 className='text-xl font-semibold mt-8 mb-4'>
							5 kunlik prognoz
						</h3>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
							{forecastData.list.slice(0, 6).map((day: any, i: number) => (
								<motion.div
									key={i}
									className='bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: i * 0.1 }}
								>
									<p className='font-medium mb-2 text-gray-700 dark:text-gray-200'>
										{new Date(day.dt_txt).toLocaleDateString('uz-UZ', {
											weekday: 'long',
											month: 'short',
											day: 'numeric',
										})}
									</p>
									<div className='flex items-center gap-2 mb-1'>
										<FaTemperatureHigh />
										<p>
											Harorat: <strong>{Math.round(day.main.temp)}°C</strong>
										</p>
									</div>
									<div className='flex items-center gap-2 text-sm'>
										<FaCloudSun />
										<p className='capitalize'>{day.weather[0].description}</p>
									</div>
								</motion.div>
							))}
						</div>
					</>
				)}
			</div>
		</main>
	)
}
