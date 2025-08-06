const weekdays = [
	'Yakshanba',
	'Dushanba',
	'Seshanba',
	'Chorshanba',
	'Payshanba',
	'Juma',
	'Shanba',
]

const months = [
	'Yanv',
	'Fev',
	'Mart',
	'Aprel',
	'May',
	'Iyun',
	'Iyul',
	'Avg',
	'Sent',
	'Okt',
	'Noy',
	'Dek',
]

export const formatDateUz = (dateStr: string): string => {
	try {
		const date = new Date(dateStr)
		if (isNaN(date.getTime())) return 'Nomaʼlum sana'

		const day = date.getDate()
		const month = months[date.getMonth()]
		const weekday = weekdays[date.getDay()]
		return `${weekday}, ${day} ${month}`
	} catch {
		return 'Nomaʼlum sana'
	}
}
