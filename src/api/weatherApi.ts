import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const fetchWeather = async (city: string) => {
	try {
		const response = await axios.get(`${BASE_URL}/weather`, {
			params: {
				q: city,
				appid: API_KEY,
				units: 'metric',
			},
		})
		return response.data
	} catch (error: any) {
		console.error('Error fetching current weather:', error)
		throw new Error('Failed to fetch current weather')
	}
}

export const fetchForecast = async (city: string) => {
	try {
		const response = await axios.get(`${BASE_URL}/forecast`, {
			params: {
				q: city,
				appid: API_KEY,
				units: 'metric',
			},
		})
		return response.data
	} catch (error: any) {
		console.error('Error fetching weather forecast:', error)
		throw new Error('Failed to fetch weather forecast')
	}
}
