import { createSlice } from '@reduxjs/toolkit';

import { UserData } from 'interface';
import { localStorage, history } from 'helpers';
import { login } from './action';


const initialState: UserData = {
    accessToken: '',
    refreshToken: '',
    roles: [],
    name: '',
    loading: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.roles = action.payload.roles;
            state.name = action.payload.name;
            localStorage.setTokenUser(action.payload.accessToken);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state = action.payload.data;
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
