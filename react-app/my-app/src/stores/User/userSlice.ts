import { createSlice } from '@reduxjs/toolkit';

import { StatusResponse, UserData } from 'interface';
import { localStorage } from 'helpers';
import { login } from './userThunk';


const initialState = {
    user: {} as UserData,
    loading: false,
    error: {} as StatusResponse
};

/* function that accepts an initial state, an object of reducer functions, and a 
 "slice name", and automatically generates action creators and action types that correspond to the reducers and state
 */

export const userSlice = createSlice({
    name: 'user',
    initialState,
    // functions intended to handle a specific action type, equivalent to a single case statement in a switch
    reducers: {
        removeUser: (state) => {
            state.user = initialState.user;
            localStorage.clearToken();
        }
    },
    // extraReducers allows createSlice to respond to other action types besides the types it has generated.
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.data;
            state.error = initialState.error;
            localStorage.setTokenUser(action.payload.data.accessToken!);
        });
        builder.addCase(login.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as StatusResponse;
        });
    }
});

export const { removeUser } = userSlice.actions;
export { login };
