import { useWeather } from '../hooks/useWeather'
import { FaTemperatureHigh, FaTint, FaWind } from 'react-icons/fa'

export const WeatherCard = ({ city }: { city: string }) => {
	const { data, isLoading, isError } = useWeather(city)

	if (isLoading)
		return (
			<p className='text-center text-gray-600 dark:text-gray-300'>
				Yuklanmoqda...
			</p>
		)
	if (isError)
		return (
			<p className='text-center text-red-500 dark:text-red-400'>
				Xatolik yuz berdi!
			</p>
		)

	return (
		<div className='bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-gray-900 text-white p-6 rounded-2xl shadow-lg w-full max-w-sm mx-auto transition-all duration-300'>
			<h2 className='text-2xl font-semibold mb-4 text-center'>{data.name}</h2>

			<div className='flex items-center gap-3 mb-3'>
				<FaTemperatureHigh className='text-xl text-yellow-200' />
				<p className='text-lg'>
					Harorat: <span className='font-medium'>{data.main.temp}°C</span>
				</p>
			</div>

			<div className='flex items-center gap-3 mb-3'>
				<FaTint className='text-xl text-blue-200' />
				<p className='text-lg'>
					Namlik: <span className='font-medium'>{data.main.humidity}%</span>
				</p>
			</div>

			<div className='flex items-center gap-3'>
				<FaWind className='text-xl text-green-200' />
				<p className='text-lg'>
					Shamol: <span className='font-medium'>{data.wind.speed} m/s</span>
				</p>
			</div>
		</div>
	)
}
