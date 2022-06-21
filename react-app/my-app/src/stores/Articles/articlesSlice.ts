import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ArticleDetail, StatusResponse } from 'interface';

import {
  getArticles, addArticle, updateArticle, deleteArticle
} from './articlesThunk';

const initialState = {
  articles: [] as ArticleDetail[],
  loading: false,
  error: {} as StatusResponse
};

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: { example: () => initialState },
  extraReducers: builder => {
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.loading = false;
      state.articles = action.payload.data;
    });
    builder.addCase(addArticle.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(updateArticle.fulfilled, state => {
      state.loading = false;
    });

    builder.addMatcher(
      isAnyOf(updateArticle.rejected, getArticles.rejected,
        addArticle.rejected, deleteArticle.rejected), (state, action) => {
        state.loading = false;
        state.error = action.payload as StatusResponse;
      });

    builder.addMatcher(
      isAnyOf(updateArticle.pending, getArticles.pending,
        addArticle.pending, deleteArticle.pending), state => {
        state.loading = true;
        state.error = initialState.error;
      });
  }
});

export const { example } = articleSlice.actions;
