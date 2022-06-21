import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ArticleDetail, Pagination, PayloadArticle
} from 'interface';
import { apiCall } from 'utils';
import { generateQueryString } from 'helpers';
import { RootState } from 'stores';
import { endpoints } from 'constant';

export const getArticles = createAsyncThunk('articles/getArticles', async({ page = 0, limit = 20 }: Pagination, thunkAPI) => {
  try {
    const { user: { user: { accessToken } } } = await thunkAPI.getState() as RootState;
    const response = await apiCall<ArticleDetail[]>({
      endpoint: `${ endpoints.article }?${ generateQueryString({
        page,
        limit,
        sort: 'ASC'
      }) }`,
      method: 'GET',
      token: accessToken
    });
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addArticle = createAsyncThunk('articles/addArticle', async(payload: PayloadArticle, thunkAPI) => {
  try {
    const response = await apiCall<ArticleDetail>({
      endpoint: endpoints.article,
      method: 'POST',
      payload
    });
    await thunkAPI.dispatch(getArticles({}));
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateArticle = createAsyncThunk('articles/updateArticle', async(payload: PayloadArticle, thunkAPI) => {
  try {
    const response = await apiCall<ArticleDetail>({
      endpoint: `${ endpoints.article }/${ payload.id }`,
      method: 'PUT',
      payload
    });
    await thunkAPI.dispatch(getArticles({}));
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteArticle = createAsyncThunk('articles/deleteArticle', async(payload: PayloadArticle, thunkAPI) => {
  try {
    const response = await apiCall<ArticleDetail>({
      endpoint: `${ endpoints.article }/${ payload.id }`,
      method: 'DELETE',
      payload
    });
    await thunkAPI.dispatch(getArticles({}));
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});