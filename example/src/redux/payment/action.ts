import {
        createAsyncThunk,
      } from '@reduxjs/toolkit';
    import { network } from 'data/api';
    
    export const getPayment = createAsyncThunk('getPayment/post', async () => {
        const response = await network('https://api.kanye.rest/', {method:'GET'})
    
        return response
    });
    