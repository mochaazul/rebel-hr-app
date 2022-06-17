import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserData } from 'interface';
import { request } from 'utils';
import { path } from 'config';

type LoginType = {
    username: string;
    password: string;
};

// function that accepts a Redux action type string and a callback function that should return a promise
export const login = createAsyncThunk('auth/login', async (payload: LoginType, thunkAPI) => {
    try {
        const response = await request<UserData>({ path: path.auth, method: 'POST', payload });
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);

    }
});