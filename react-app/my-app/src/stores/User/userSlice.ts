import { createSlice } from '@reduxjs/toolkit';

import { UserData } from 'interface';
import { localStorage, history } from 'helpers';
import { login } from './action';


const initialState = {
    user: {} as UserData,
    loading: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            // state.user = action.payload;
            // localStorage.setTokenUser(action.payload.accessToken);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.data;
            localStorage.setTokenUser(action.payload.data.accessToken!);
            history.push('/dashboard');
        });
        builder.addCase(login.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
        });
    }
});

export const { setUserData } = userSlice.actions;
export { login };
