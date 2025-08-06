export const getBackgroundImage = (desc: string): string => {
	const lower = desc.toLowerCase()

	if (lower.includes('clear')) return '/images/clear.jpg'
	if (lower.includes('cloud')) return '/images/clouds.jpg'
	if (lower.includes('rain')) return '/images/rain.jpg'
	if (lower.includes('snow')) return '/images/snow.jpg'
	if (lower.includes('thunder')) return '/images/thunder.jpg'
	if (lower.includes('mist') || lower.includes('fog')) return '/images/mist.jpg'

	return '/images/default.jpg'
}
