/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArticleDetail, PayloadArticle } from 'interface';
import { endpoints } from 'constant';
import thunkUtils from 'utils/thunk';

export const getArticles = thunkUtils<ArticleDetail[]>({
  type: 'articles/getArticles',
  method: 'GET',
  endpoint: endpoints.article,
  // queryParam: {
  //   page: 0,
  //   limit: 20
  // },
  // onSuccess({response, dispatch}) {
  //   console.log(response, dispatch)
  // },
  // onFailed({ error, dispatch }) {
  //   console.log(error, dispatch)
  // }
});

export const addArticle = thunkUtils<PayloadArticle>({
  type: 'articles/addArticle',
  endpoint: endpoints.article,
  method: 'POST',
  onSuccess: ({ response, dispatch }) => dispatch(getArticles({})),
});

export const updateArticle = thunkUtils<PayloadArticle>({
  type: 'articles/updateArticle',
  endpoint: endpoints.article,
  method: 'PUT',
  onSuccess: ({ response, dispatch }) => dispatch(getArticles({})),
});

export const deleteArticle = thunkUtils<PayloadArticle>({
  type: 'articles/deleteArticle',
  endpoint: endpoints.article,
  method: 'DELETE',
  onSuccess: ({ response, dispatch }) => dispatch(getArticles({})),
});
