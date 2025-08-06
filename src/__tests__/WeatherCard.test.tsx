import { render, screen } from '@testing-library/react'
import { WeatherCard } from '../components/weather/WeatherCard'
import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Framer Motion ni mock qilish (motion.section o‘rniga oddiy section ishlatilyapti)
vi.mock('framer-motion', () => ({
	motion: {
		section: ({ children, ...rest }: any) => (
			<section {...rest}>{children}</section>
		),
	},
}))

describe('WeatherCard', () => {
	const defaultProps = {
		city: 'Tashkent',
		temp: 28,
		humidity: 40,
		wind: 5,
		description: 'clear sky',
	}

	test('shahar nomi chiqishi kerak', () => {
		render(<WeatherCard {...defaultProps} />)
		expect(screen.getByText('Tashkent')).toBeInTheDocument()
	})

	test('harorat, namlik va shamol qiymatlari test id bilan chiqishi kerak', () => {
		render(<WeatherCard {...defaultProps} />)

		expect(screen.getByTestId('temperature')).toHaveTextContent('Harorat: 28°C')
		expect(screen.getByTestId('humidity')).toHaveTextContent('Namlik: 40%')
		expect(screen.getByTestId('wind')).toHaveTextContent('Shamol: 5 m/s')
	})

	test('region role orqali section chiqayotganini tekshirish', () => {
		render(<WeatherCard {...defaultProps} />)
		const region = screen.getByRole('region', { name: /joriy ob-havo/i })
		expect(region).toBeInTheDocument()
	})
})
