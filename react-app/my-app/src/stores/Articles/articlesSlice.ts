import { createSlice } from '@reduxjs/toolkit';

import { ArticleDetail } from 'interface';

const initialState = {
    articles: [] as ArticleDetail[]
};

export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        getArticles: (state, action) => {
            //    state.posts = []
        }
    }
});

export const { getArticles } = articleSlice.actions;
