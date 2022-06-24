/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArticleDetail, PayloadArticle } from 'interface';
import { endpoints } from 'constant';
import { thunkUtils } from 'utils';

export const getArticles = thunkUtils<ArticleDetail[], PayloadArticle>({
  type: 'articles/getArticles',
  method: 'GET',
  endpoint: endpoints.article,
<<<<<<< HEAD
});

export const addArticle = thunkUtils<ArticleDetail, PayloadArticle>({
=======
  // queryParam: {
  //   page: 0,
  //   limit: 20
  // },
  // onSuccess({ response, dispatch }) {
  //   // console.log(response, dispatch);
  //   // dispatch(addArticle({}));
  // },
  // onFailed({ error, dispatch }) {
  //   console.log(error, dispatch);
  // }
});
export const addArticle = thunkUtils<PayloadArticle>({
>>>>>>> d29a965 ([Cleanup] Cleaning up spaces linter)
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
