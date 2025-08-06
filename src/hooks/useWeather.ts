import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../services/weatherService'

export const useWeather = (city: string) => {
	return useQuery({
		queryKey: ['weather', city],
		queryFn: () => getWeather(city),
		enabled: !!city,
	})
}
