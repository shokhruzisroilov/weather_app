import { motion } from 'framer-motion'
import {
	FaTemperatureHigh,
	FaTint,
	FaWind,
	FaCloudSun,
	FaCloudRain,
	FaSun,
	FaSnowflake,
	FaSmog,
} from 'react-icons/fa'

interface WeatherCardProps {
	city: string
	temp: number
	humidity: number
	wind: number
	description: string
}

const getWeatherIcon = (desc: string) => {
	const lowerDesc = desc.toLowerCase()

	if (lowerDesc.includes('cloud'))
		return <FaCloudSun className='text-4xl text-white' />
	if (lowerDesc.includes('rain'))
		return <FaCloudRain className='text-4xl text-blue-300' />
	if (lowerDesc.includes('clear'))
		return <FaSun className='text-4xl text-yellow-300' />
	if (lowerDesc.includes('snow'))
		return <FaSnowflake className='text-4xl text-blue-100' />
	if (
		lowerDesc.includes('fog') ||
		lowerDesc.includes('mist') ||
		lowerDesc.includes('haze')
	)
		return <FaSmog className='text-4xl text-gray-300' />

	return <FaCloudSun className='text-4xl text-white' />
}

export const WeatherCard = ({
	city,
	temp,
	humidity,
	wind,
	description,
}: WeatherCardProps) => {
	return (
		<motion.section
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			whileHover={{ scale: 1.02 }}
			className='w-full max-w-sm mx-auto p-6 rounded-2xl shadow-lg bg-gradient-to-br from-sky-500 to-blue-700 dark:from-gray-800 dark:to-gray-900 text-white transition-all duration-300'
			role='region'
			aria-label={`Joriy ob-havo: ${city}`}
			data-testid='weather-card'
		>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-2xl font-bold'>{city}</h2>
				{getWeatherIcon(description)}
			</div>

			<div className='space-y-4'>
				<div className='flex items-center gap-3'>
					<FaTemperatureHigh className='text-xl text-yellow-300' />
					<p className='text-lg' data-testid='temperature'>
						Harorat: <span className='font-bold'>{temp}°C</span>
					</p>
				</div>

				<div className='flex items-center gap-3'>
					<FaTint className='text-xl text-blue-200' />
					<p className='text-lg' data-testid='humidity'>
						Namlik: <span className='font-bold'>{humidity}%</span>
					</p>
				</div>

				<div className='flex items-center gap-3'>
					<FaWind className='text-xl text-green-200' />
					<p className='text-lg' data-testid='wind'>
						Shamol: <span className='font-bold'>{wind} m/s</span>
					</p>
				</div>
			</div>
		</motion.section>
	)
}
