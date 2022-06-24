/* eslint-disable no-unused-vars */
import { useAppDispatch, useTypedSelector } from 'hooks';
import React, { useEffect, useState } from 'react';

import {
  getArticles, addArticle as addArticleAction, updateArticle as updateArticleAction, deleteArticle as deleteArticleAction
} from 'stores/actions';
import {
  createFieldConfig, maxLengthRule, minLengthRule, navigation, requiredRule
} from 'helpers';
<<<<<<< HEAD
import {
  ArticleState, Pagination, PayloadArticle
} from 'interface';
=======
>>>>>>> d29a965 ([Cleanup] Cleaning up spaces linter)

enum ModalType {
  INIT,
  ADD,
  UPDATE,
}

type QueryParams = {
  tempOffset?: number,
  tempLimit?: number;
};

export const addArticleField = {
  title: {
    ...createFieldConfig({
      name: 'title',
      type: 'text'
    }),
    validationRules: [
      requiredRule('title'),
      minLengthRule('title', 10),
      maxLengthRule('title', 25)
    ]
  },
  content: {
    ...createFieldConfig({
      name: 'content',
      type: 'text'
    }),
    validationRules: [
      requiredRule('content'),
      minLengthRule('content', 8),
      maxLengthRule('content', 20)
    ]
  }
};

const useDashboard = () => {
<<<<<<< HEAD
  const { articles, loading: loadingArticle }  = useTypedSelector<ArticleState>('articles');
=======
  const { loading: loadingArticle } = useTypedSelector(state => state.articles);
  const articles = useTypedSelector(state => selectAllData(state.articles, {}));
  
  const dispatch = useAppDispatch();
>>>>>>> d29a965 ([Cleanup] Cleaning up spaces linter)
  const { navigate } = navigation();

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [modalVisible, setModalVisible] = useState<ModalType>(ModalType.INIT);
  const [idArticle, setIdArticle] = useState(0);

<<<<<<< HEAD
  const fetchArticle = useAppDispatch<Pagination>(getArticles);
  const addArticle = useAppDispatch<PayloadArticle>(addArticleAction);
  const updateArticle = useAppDispatch<PayloadArticle>(updateArticleAction);
  const deleteArticle = useAppDispatch<PayloadArticle>(deleteArticleAction);
=======
  const fetchArticle = useCustomDispatch(getArticles);
>>>>>>> d29a965 ([Cleanup] Cleaning up spaces linter)

  useEffect(() => {
    fetchArticle({
      payload: {
        page: offset,
        limit
      }
    });
  }, [offset, limit]);

  const onChangeLimit = (e?: React.ChangeEvent<HTMLSelectElement>) => {
    if (e) {
      const tempLimit = Number(e.target.value);
      setLimit(tempLimit);
      handleNavigate({ tempLimit });
    }
  };

  const onClickPagination = (type: string) => {
    const tempOffset = type === 'next' ? Number(offset) + Number(limit) : Number(offset) - Number(limit);
    setOffset(tempOffset > 0 ? tempOffset : 0);
    handleNavigate({ tempOffset });

  };

  const handleNavigate = ({ tempOffset = offset, tempLimit = limit }: QueryParams) => {
    navigate({
      pathname: location.pathname,
      search: `?page=${ tempOffset > 0 ? tempOffset : 0 }&limit=${ tempLimit }`

    });
  };

  const onOk = (title: string, content: string) => {
    const payload = {
      title: title,
      content: content,
      meta_description: 'Interior',
      created_by: 'superadmin',
      tags: [1],
      new_tags: [1],
      thumbnail_img: 'gambar-rumah.jpg',
      is_publish: true
    };
    modalVisible === ModalType.ADD ?
<<<<<<< HEAD
      addArticle({ payload: { ...payload } }) :
      updateArticle({
        payload: { ...payload },
=======

      dispatch(addArticle({ payload })) :

      dispatch(updateArticle({
        payload,
>>>>>>> d29a965 ([Cleanup] Cleaning up spaces linter)
        id: idArticle
      });
    setModalVisible(ModalType.INIT);
  };

  const onDeleteArticle = (id: number) => {
    deleteArticle({ id });
  };

  return {
    articles,
    limit,
    loadingArticle,
    onChangeLimit,
    onClickPagination,
    modalVisible,
    setModalVisible,
    onOk,
    modalType: ModalType,
    onDeleteArticle,
    addArticleField,
    setIdArticle
  };
};

export default useDashboard;
