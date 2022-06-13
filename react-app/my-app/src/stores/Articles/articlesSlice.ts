import { createSlice } from '@reduxjs/toolkit';
import { ArticleDetail } from 'interface';

import { getArticles, addArticle } from './action';

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
    }
});

export { getArticles, addArticle };
export const { example } = articleSlice.actions;
