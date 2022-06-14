import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserData } from 'interface';
import { request } from 'utils';
import { path } from 'config';
import { getArticles } from 'stores/Articles';

type LoginType = {
    username: string;
    password: string;
};

export const login = createAsyncThunk('auth/login', async (payload: LoginType, thunkAPI) => {
    const response = await request<UserData>({ path: path.auth, method: 'POST', payload });
    if (response.stat_code === 200) {
        await thunkAPI.dispatch(getArticles({}));
    }
    return response;
});