import { createSlice } from '@reduxjs/toolkit';

import { StatResponse, UserData } from 'interface';
import { localStorage, history } from 'helpers';
import { login } from './action';


const initialState = {
    user: {} as UserData,
    loading: false,
    error: {} as StatResponse
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.user.name = "Boboboi";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.data;
            state.error = initialState.error;
            localStorage.setTokenUser(action.payload.data.accessToken!);
            history.push('/dashboard');
        });
        builder.addCase(login.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as StatResponse;
        });
    }
});

export const { setUserData } = userSlice.actions;
export { login };
