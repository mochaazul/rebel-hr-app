import { createSlice } from '@reduxjs/toolkit';

import { localStorage, history } from 'helpers';

const initialState = {
    username: '',
    email: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            localStorage.setTokenUser('newtoken1234567890');
            history.replace('/dashboard');
        }
    }
});

export const { login } = userSlice.actions;
