export const translateWeather = (desc: string): string => {
	const map: Record<string, string> = {
		'clear sky': 'Ochiq osmon',
		'few clouds': 'Biroz bulutli',
		'scattered clouds': 'Tarqoq bulutlar',
		'broken clouds': 'Bulutli',
		'shower rain': 'Yog‘ingarchilik',
		rain: 'Yomg‘ir',
		thunderstorm: 'Momaqaldiroq',
		snow: 'Qor',
		mist: 'Tuman',
	}
	return map[desc.toLowerCase()] || desc
}
