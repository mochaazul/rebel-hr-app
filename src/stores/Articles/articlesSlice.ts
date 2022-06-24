import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ArticleState, ResponseStatus } from 'interface';

import {
  getArticles, addArticle, updateArticle, deleteArticle
} from './articlesThunk';

const initialState: ArticleState = {
  articles: [],
  loading: false,
  error: {}
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
        state.error = action.payload as ResponseStatus;
      });
<<<<<<< HEAD

=======
>>>>>>> d29a965 ([Cleanup] Cleaning up spaces linter)
    builder.addMatcher(
      isAnyOf(updateArticle.pending, getArticles.pending,
        addArticle.pending, deleteArticle.pending), state => {
        state.loading = true;
        state.error = initialState.error;
      });
  }
});

export const { example } = articleSlice.actions;
