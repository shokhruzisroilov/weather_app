import { render, screen } from '@testing-library/react'
import { HomePage } from '../pages/HomePage'
import { vi } from 'vitest'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

// ✅ ThemeSwitcher ni mock qilamiz
vi.mock('../components/theme/ThemeSwitcher', () => ({
	ThemeSwitcher: () => <div data-testid='theme-switcher' />,
}))

vi.mock('../components/search/SearchBar', () => ({
	SearchBar: () => <div data-testid='search-bar' />,
}))

// ✅ framer-motion ni mock qilamiz
vi.mock('framer-motion', () => ({
	motion: {
		section: ({ children, ...rest }: any) => (
			<section {...rest}>{children}</section>
		),
	},
}))

vi.mock('../components/forecasts/ForecastCard', () => ({
	ForecastCard: () => <div data-testid='forecast-card' />,
}))

// ✅ useWeather ni mock qilamiz
vi.mock('../hooks/useWeather', () => ({
	useWeather: () => ({
		data: {
			name: 'Toshkent',
			main: { temp: 30, humidity: 45 },
			wind: { speed: 5 },
			weather: [{ description: 'clear sky' }],
			cod: 200,
		},
		isLoading: false,
		isError: false,
	}),
}))

// ✅ useForecast ni mock qilamiz
vi.mock('../hooks/useForecast', () => ({
	useForecast: () => ({
		data: {
			list: [
				{
					dt_txt: '2025-08-07 12:00:00',
					main: { temp: 29 },
					weather: [{ description: 'cloudy' }],
				},
				{
					dt_txt: '2025-08-08 12:00:00',
					main: { temp: 31 },
					weather: [{ description: 'sunny' }],
				},
			],
		},
	}),
}))

// ✅ Background image util mock
vi.mock('../utils/getBackgroundImage', () => ({
	getBackgroundImage: () => '/images/sunny.jpg',
}))

describe('HomePage', () => {
	test('🌤 Sarlavha va ob-havo cardlari chiqyaptimi', () => {
		render(
			<Provider store={store}>
				<HomePage />
			</Provider>
		)

		expect(screen.getByText(/🌤 Ob-havo ma'lumotlari/i)).toBeInTheDocument()
		expect(screen.getByText(/Toshkent/i)).toBeInTheDocument()
		expect(screen.getByText(/Harorat:/i)).toBeInTheDocument()
		expect(screen.getByText(/Namlik:/i)).toBeInTheDocument()
		expect(screen.getByText(/Shamol:/i)).toBeInTheDocument()
	})

	test('📅 5 kunlik prognoz bo‘limi chiqyaptimi', () => {
		render(
			<Provider store={store}>
				<HomePage />
			</Provider>
		)

		expect(screen.getByText(/5 kunlik prognoz/i)).toBeInTheDocument()
		expect(screen.getAllByText(/2025/i).length).toBeGreaterThan(0)
	})
})
