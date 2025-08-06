import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 text-center'>
			<h1 className='text-6xl font-bold text-primary mb-4'>404</h1>
			<h2 className='text-2xl font-semibold mb-2'>Sahifa topilmadi</h2>
			<p className='mb-6 text-gray-600 dark:text-gray-400'>
				Kechirasiz, siz qidirgan sahifa mavjud emas yoki o‘chirilgan.
			</p>
			<Link
				to='/'
				className='bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-sky-600 transition-all duration-200'
			>
				Bosh sahifaga qaytish
			</Link>
		</div>
	)
}

export default NotFound
