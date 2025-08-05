import { fetchForecast } from '../../shared/api/weatherApi'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'

export const ForecastPage = () => {
	const city = 'Tashkent'

	const { data, isLoading } = useQuery({
		queryKey: ['forecast', city],
		queryFn: () => fetchForecast(city),
	})

	if (isLoading) return <p>Yuklanmoqda...</p>
	if (!data) return <p>Xatolik!</p>

	return (
		<div className='p-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
			{data.list.slice(0, 6).map((day: any, i: number) => (
				<motion.div
					key={i}
					className='bg-white dark:bg-gray-800 p-4 rounded shadow'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: i * 0.1 }}
				>
					<p className='font-semibold'>{new Date(day.dt_txt).toDateString()}</p>
					<p>Temp: {day.main.temp}°C</p>
					<p>{day.weather[0].description}</p>
				</motion.div>
			))}
		</div>
	)
}
