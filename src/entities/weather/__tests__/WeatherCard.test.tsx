import { render, screen } from '@testing-library/react'
import { WeatherCard } from '../ui/WeatherCard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Har bir test uchun alohida queryClient
const queryClient = new QueryClient()

const renderWithQueryProvider = (ui: React.ReactNode) => {
	return render(
		<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
	)
}

test('weather card shows loading text', () => {
	renderWithQueryProvider(<WeatherCard city='Tashkent' />)

	expect(screen.getByText(/Yuklanmoqda/i)).toBeInTheDocument()
})
