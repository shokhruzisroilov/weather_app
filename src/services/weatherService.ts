import { api } from './api'

export const getWeather = async (city: string) => {
	try {
		const response = await api.get('/weather', {
			params: { q: city },
		})
		return response.data
	} catch (error) {
		console.error('Xatolik: ob-havo maʼlumotlari olinmadi', error)
		throw new Error("Ob-havo ma'lumotlarini yuklab bo‘lmadi")
	}
}
