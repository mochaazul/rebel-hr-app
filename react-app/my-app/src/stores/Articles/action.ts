import { createAsyncThunk } from '@reduxjs/toolkit';
import { ArticleDetail, Pagination, PayloadArticle } from 'interface';
import { network } from 'utils';
import { path } from 'config';
import { generateQueryString } from 'helpers';

export const getArticles = createAsyncThunk('articles/getArticles', async ({ sort, offset, page, limit }: Pagination) => {
    const response = await network<ArticleDetail[]>
        ({ path: `${ path.article }?${ generateQueryString({ page, limit, sort: 'ASC' }) }`, method: 'GET' });
    return response;
});

export const addArticle = createAsyncThunk('articles/addArticle', async (payload: PayloadArticle, thunkAPi) => {
    const response = await network<ArticleDetail[]>
        ({ path: path.article, method: 'POST', payload });
    return response;
});