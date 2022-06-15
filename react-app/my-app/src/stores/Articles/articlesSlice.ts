import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ArticleDetail, StatResponse } from 'interface';

import { getArticles, addArticle, updateArticle, deleteArticle } from './action';

const initialState = {
    articles: [] as ArticleDetail[],
    loading: false,
    error: {} as StatResponse
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
        builder.addCase(addArticle.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(updateArticle.fulfilled, (state, action) => {
            state.loading = false;
        });

        builder.addMatcher(
            isAnyOf(updateArticle.rejected, getArticles.rejected,
                addArticle.rejected, deleteArticle.rejected), (state, action) => {
                    state.loading = false;
                    state.error = action.payload as StatResponse;
                });

        builder.addMatcher(
            isAnyOf(updateArticle.pending, getArticles.pending,
                addArticle.pending, deleteArticle.pending), (state, action) => {
                    state.loading = true;
                    state.error = initialState.error;
                });
    }
});

export const { example } = articleSlice.actions;
