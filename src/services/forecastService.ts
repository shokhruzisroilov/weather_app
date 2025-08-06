import { api } from './api'

export const getForecast = async (city: string) => {
	try {
		const response = await api.get('/forecast', {
			params: { q: city },
		})
		return response.data
	} catch (error) {
		console.error('Xatolik: prognoz maʼlumotlari olinmadi', error)
		throw new Error('Prognoz maʼlumotlarini yuklab bo‘lmadi')
	}
}
