import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ArticleDetail, PayloadArticle
} from 'interface';
import { apiCall } from 'utils';
import { endpoints } from 'constant';
import thunkWrapper from 'utils/thunk';

export const getArticles = thunkWrapper<ArticleDetail[]>({
  type: 'articles/getArticles',
  method: 'GET',
  queryParam: {
    page: 0,
    limit: 4
  },
  // onSuccess({response, dispatch}) {
  //   console.log(response, dispatch)
  // },
  // onFailed({ error, dispatch }) {
  //   console.log(error, dispatch)
  // }
});

// export const getArticles = createAsyncThunk('articles/getArticles', async({ page = 0, limit = 20 }: Pagination, thunkAPI) => {
//   try {
//     const { user: { user: { accessToken } } } = await thunkAPI.getState() as RootState;
//     const response = await apiCall<ArticleDetail[]>({
//       endpoint: `${ endpoints.article }?${ generateQueryString({
//         page,
//         limit,
//         sort: 'ASC'
//       }) }`,
//       method: 'GET',
//       token: accessToken
//     });
//     return response;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error);
//   }
// });

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
      endpoint: `${endpoints.article}/${payload.id}`,
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
      endpoint: `${endpoints.article}/${payload.id}`,
      method: 'DELETE',
      payload
    });
    await thunkAPI.dispatch(getArticles({}));
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});