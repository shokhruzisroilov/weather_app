import { motion } from 'framer-motion'
import { FaTemperatureHigh, FaCloudSun } from 'react-icons/fa'
import { translateWeather } from '../../utils/translateWeather'

interface ForecastCardProps {
	date: string
	temp: number
	description: string
	index: number
}

export const ForecastCard = ({
	date,
	temp,
	description,
	index,
}: ForecastCardProps) => {
	return (
		<motion.article
			className='bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col gap-4 cursor-pointer'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			whileHover={{ scale: 1.03 }}
			transition={{ delay: index * 0.1, type: 'spring', stiffness: 70 }}
			role='region'
			aria-label={`Prognoz: ${date}`}
			data-testid={`forecast-card-${index}`}
		>
			<h3 className='font-semibold text-lg text-primary dark:text-sky-400 text-center'>
				{date}
			</h3>

			<div className='flex items-center gap-3 text-gray-700 dark:text-gray-200'>
				<FaTemperatureHigh className='text-xl text-primary' />
				<p className='text-base'>
					Harorat: <span className='font-semibold'>{temp}°C</span>
				</p>
			</div>

			<div className='flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm'>
				<FaCloudSun className='text-xl text-yellow-500 dark:text-yellow-300' />
				<p className='capitalize'>{translateWeather(description)}</p>
			</div>
		</motion.article>
	)
}
