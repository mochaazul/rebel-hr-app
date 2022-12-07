import { createSlice } from '@reduxjs/toolkit';

type ThemeState = {
  isDark: boolean
}

const initialState: ThemeState = {
	isDark: false
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: state => {
			state.isDark = !state.isDark;
		}
	},
});

export const { toggleTheme } = themeSlice.actions;
