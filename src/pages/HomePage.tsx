import { useEffect, useState } from 'react'
import { useWeather } from '../hooks/useWeather'
import { useForecast } from '../hooks/useForecast'
import { SearchBar } from '../components/search/SearchBar'
import { WeatherCard } from '../components/weather/WeatherCard'
import { ForecastCard } from '../components/forecasts/ForecastCard'
import { Loader } from '../components/common/Loader'
import { formatDateUz } from '../utils/formatDateUz'
import { getBackgroundImage } from '../utils/getBackgroundImage'
import { ThemeSwitcher } from '../components/theme/ThemeSwitcher'

export const HomePage = () => {
	const [city, setCity] = useState('Toshkent')
	const [input, setInput] = useState('')
	const [backgroundImage, setBackgroundImage] = useState('/images/default.jpg')

	const { data: weatherData, isLoading, isError } = useWeather(city)
	const { data: forecastData } = useForecast(city)

	useEffect(() => {
		if (weatherData?.weather?.[0]?.description) {
			const bg = getBackgroundImage(weatherData.weather[0].description)
			setBackgroundImage(bg)
		}
	}, [weatherData])

	const handleSearch = () => {
		if (input.trim()) {
			setCity(input.trim())
		}
	}

	const filteredForecast = forecastData?.list?.filter((item: any) =>
		item.dt_txt.includes('12:00:00')
	)

	return (
		<main
			className='min-h-screen bg-cover bg-bottom bg-no-repeat transition-all duration-500 relative'
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			{/* Theme Switcher in top-right corner */}
			<div className='absolute top-5 right-5 z-50'>
				<ThemeSwitcher />
			</div>

			<div className='min-h-screen bg-gradient-to-br from-white/80 to-slate-100/80 dark:from-black/80 dark:to-zinc-900/80 px-4 py-8 flex flex-col items-center justify-between'>
				<div className='w-full max-w-5xl space-y-10 text-center'>
					{/* Header */}
					<h1 className='text-4xl font-extrabold text-primary dark:text-primary-light drop-shadow mb-6'>
						🌤 Ob-havo ma'lumotlari
					</h1>

					{/* Search */}
					<SearchBar
						value={input}
						onChange={setInput}
						onSearch={handleSearch}
					/>

					{/* Weather Card */}
					<div className='mt-6'>
						{isLoading ? (
							<Loader />
						) : isError || weatherData?.cod === '404' ? (
							<p className='text-red-500 text-lg font-medium text-center'>
								❌ Shahar topilmadi yoki xatolik yuz berdi!
							</p>
						) : (
							weatherData && (
								<WeatherCard
									city={weatherData.name}
									temp={Math.round(weatherData.main.temp)}
									humidity={weatherData.main.humidity}
									wind={weatherData.wind.speed}
									description={weatherData.weather[0].description}
								/>
							)
						)}
					</div>

					{/* Forecast Cards */}
					{filteredForecast && filteredForecast.length > 0 && (
						<div className='mt-12 text-center'>
							<h3 className='text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200'>
								📅 5 kunlik prognoz (soat 12:00)
							</h3>
							<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
								{filteredForecast.map((day: any, i: number) => (
									<ForecastCard
										key={i}
										index={i}
										date={formatDateUz(day.dt_txt)}
										temp={Math.round(day.main.temp)}
										description={day.weather[0].description}
									/>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Footer */}
				<footer className='text-sm text-gray-600 dark:text-gray-400 text-center mt-12 pb-4'>
					© 2025 <span className='font-semibold'>Ob-havo ilovasi</span> |
					Developed by{' '}
					<a
						href='https://t.me/shohruz_isroilov'
						target='_blank'
						rel='noopener noreferrer'
						className='text-primary hover:underline'
					>
						Shohruz Isroilov
					</a>
				</footer>
			</div>
		</main>
	)
}
