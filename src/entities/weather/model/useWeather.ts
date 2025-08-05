import { useQuery } from '@tanstack/react-query'
import { fetchWeather } from '../../../shared/api/weatherApi'

export const useWeather = (city: string) => {
	return useQuery({
		queryKey: ['weather', city],
		queryFn: () => fetchWeather(city),
		enabled: !!city, // city bo'sh bo'lmasligi kerak
	})
}
