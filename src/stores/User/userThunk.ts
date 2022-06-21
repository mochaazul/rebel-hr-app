import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoints } from 'constant';
import { UserData } from 'interface';
import { apiCall } from 'utils';

type LoginType = {
  username: string;
  password: string;
};

// function that accepts a Redux action type string and a callback function that should return a promise
export const login = createAsyncThunk('auth/login', async(payload: LoginType, thunkAPI) => {
  try {
    const response = await apiCall<UserData>({
      endpoint: endpoints.auth,
      method: 'POST',
      payload
    });
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
