/* eslint-disable no-unused-vars */
import React from 'react';
import { useAppDispatch, useTypedSelector } from 'hooks';
import { useEffect, useState } from 'react';

import {
  getArticles, addArticle, updateArticle, deleteArticle
} from 'stores/actions';
import {
  createFieldConfig, maxLengthRule, minLengthRule, navigation, requiredRule
} from 'helpers';

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
  const { articles, loading: loadingArticle } = useTypedSelector(state => state.articles);
  const dispatch = useAppDispatch();
  const { navigate } = navigation();

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [modalVisible, setModalVisible] = useState<ModalType>(ModalType.INIT);
  const [idArticle, setIdArticle] = useState(0);

  useEffect(() => {
    dispatch(getArticles({
      limit: 1
    }));
  }, [
    dispatch,
    offset,
    limit
  ]);

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
      dispatch(addArticle(payload)) :
      dispatch(updateArticle({
        ...payload,
        id: idArticle
      }));
    setModalVisible(ModalType.INIT);
  };

  const onDeleteArticle = (id: number) => {
    dispatch(deleteArticle({ id }));
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
