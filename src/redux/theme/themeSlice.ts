import { createSlice } from '@reduxjs/toolkit'

type ThemeState = {
	value: 'light' | 'dark'
}

const initialState: ThemeState = {
	value: (localStorage.getItem('theme') as 'light' | 'dark') || 'dark',
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: state => {
			state.value = state.value === 'light' ? 'dark' : 'light'
			localStorage.setItem('theme', state.value)
		},
		setTheme: (state, action) => {
			state.value = action.payload
			localStorage.setItem('theme', state.value)
		},
	},
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
