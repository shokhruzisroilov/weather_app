import { AppRouter } from './router/AppRouter'
import { ThemeProvider } from './providers/ThemeProvider'
import { ReactQueryProvider } from './providers/ReactQueryProvider'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider>
				<ReactQueryProvider>
					<AppRouter />
				</ReactQueryProvider>
			</ThemeProvider>
		</Provider>
	)
}

export default App
