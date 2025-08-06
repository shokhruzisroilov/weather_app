import { useQuery } from '@tanstack/react-query'
import { getForecast } from '../services/forecastService'

export const useForecast = (city: string) => {
	return useQuery({
		queryKey: ['forecast', city],
		queryFn: () => getForecast(city),
		enabled: !!city,
	})
}
