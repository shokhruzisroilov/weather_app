import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from '../../pages/home/HomePage'
import { ForecastPage } from '../../pages/forecast/ForecastPage'

const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/forecast', element: <ForecastPage /> },
])

export const AppRouter = () => <RouterProvider router={router} />
