export const Loader = () => (
	<div
		className='flex justify-center items-center mt-6'
		role='status'
		aria-label='Yuklanmoqda'
	>
		<div className='w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin' />
		<span className='sr-only'>Yuklanmoqda...</span>
	</div>
)
