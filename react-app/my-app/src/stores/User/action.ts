import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserData } from 'interface';
import { request } from 'utils';
import { path } from 'config';

type LoginType = {
    username: string;
    password: string;
};

export const login = createAsyncThunk('auth/login', async (payload: LoginType, thunkAPI) => {
    try {
        const response = await request<UserData>({ path: path.auth, method: 'POST', payload });
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);

    }
});