import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'stores';
import { ActionCreatorWithPayload, AsyncThunk } from '@reduxjs/toolkit';
import { RequestOptionGenericType } from 'interface';

const useAppDispatch = <T>(action: AsyncThunk<any, any, any> | ActionCreatorWithPayload<any, any>) => {

  const dispatch = useDispatch<AppDispatch>();

  return useCallback((params?: RequestOptionGenericType<T> | T) =>
    dispatch(action({ ...params })),
  [dispatch, action]);

};

export default useAppDispatch;