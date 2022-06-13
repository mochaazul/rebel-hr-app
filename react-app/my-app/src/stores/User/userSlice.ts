import { createSlice } from '@reduxjs/toolkit';

import { UserData } from 'interface';
import { localStorage } from 'helpers';

const initialState: UserData = {
    accessToken: '',
    refreshToken: '',
    roles: [],
    name: ''
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
    }
});

export const { setUserData } = userSlice.actions;
