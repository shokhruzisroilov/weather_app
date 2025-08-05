import { AppRouter } from './router'
import { ThemeProvider } from './providers/ThemeProvider'
import { ReactQueryProvider } from './providers/ReactQueryProvider'

function App() {
	return (
		<ThemeProvider>
			<ReactQueryProvider>
				<AppRouter />
			</ReactQueryProvider>
		</ThemeProvider>
	)
}

export default App
