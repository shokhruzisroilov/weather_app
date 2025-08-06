import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const api = axios.create({
	baseURL: BASE_URL,
	params: {
		appid: API_KEY,
		units: 'metric',
	},
})
