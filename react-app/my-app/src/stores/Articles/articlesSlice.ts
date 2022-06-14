import { createSlice, isAsyncThunkAction } from '@reduxjs/toolkit';
import { ArticleDetail } from 'interface';

import { getArticles, addArticle, updateArticle } from './action';

const initialState = {
    articles: [] as ArticleDetail[],
    loading: false
};

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        example: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(getArticles.fulfilled, (state, action) => {
            state.loading = false;
            state.articles = action.payload.data;
        });
        builder.addCase(getArticles.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getArticles.rejected, (state, action) => {
            state.loading = false;
        });
        builder.addCase(addArticle.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(addArticle.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addArticle.rejected, (state, action) => {
            state.loading = false;
        });
        builder.addCase(updateArticle.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(updateArticle.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updateArticle.rejected, (state, action) => {
            state.loading = false;
        });
    }
});

export const { example } = articleSlice.actions;
