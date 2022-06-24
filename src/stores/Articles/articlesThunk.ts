/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArticleDetail, PayloadArticle } from 'interface';
import { endpoints } from 'constant';
import { thunkUtils } from 'utils';

export const getArticles = thunkUtils<ArticleDetail[], PayloadArticle>({
  type: 'articles/getArticles',
  method: 'GET',
  endpoint: endpoints.article,
});

export const addArticle = thunkUtils<ArticleDetail, PayloadArticle>({
  type: 'articles/addArticle',
  endpoint: endpoints.article,
  method: 'POST',
  onSuccess: ({ response, dispatch }) => dispatch(getArticles({})),
});

export const updateArticle = thunkUtils<ArticleDetail, PayloadArticle>({
  type: 'articles/updateArticle',
  endpoint: endpoints.article,
  method: 'PUT',
  onSuccess: ({ response, dispatch }) => dispatch(getArticles({})),
});

export const deleteArticle = thunkUtils<ArticleDetail, PayloadArticle>({
  type: 'articles/deleteArticle',
  endpoint: endpoints.article,
  method: 'DELETE',
  onSuccess: ({ response, dispatch }) => dispatch(getArticles({})),
});
