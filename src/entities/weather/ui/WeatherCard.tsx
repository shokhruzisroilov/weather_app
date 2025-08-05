import { useWeather } from '../model/useWeather'

export const WeatherCard = ({ city }: { city: string }) => {
	const { data, isLoading, isError } = useWeather(city)

	if (isLoading) return <p>Yuklanmoqda...</p>
	if (isError) return <p>Xatolik yuz berdi!</p>

	return (
		<div className='bg-primary text-white p-4 rounded-lg'>
			<h2 className='text-xl font-bold'>{data.name}</h2>
			<p>Harorat: {data.main.temp}°C</p>
			<p>Namlik: {data.main.humidity}%</p>
			<p>Shamol: {data.wind.speed} m/s</p>
		</div>
	)
}
