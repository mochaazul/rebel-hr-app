import {
  TypedUseSelectorHook, useDispatch, useSelector
} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppDispatch, RootState } from 'stores';
import usePrevious from './usePrevious';
import useCountDown from './useCountdown';
import { useCallback } from 'react';
import { ActionCreatorWithPayload, AsyncThunk } from '@reduxjs/toolkit';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useCustomDispatch = <T>(action: AsyncThunk<any, any, any> | ActionCreatorWithPayload<any, any>) => {
  const dispatch = useAppDispatch();

  return useCallback((param?: T) =>
    dispatch(action({ ...param })),
  [dispatch, action]);
};
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const useNavigateApp = useNavigate;

export {
  useAppDispatch,
  useTypedSelector,
  useNavigateApp,
  usePrevious,
  useCountDown,
  useCustomDispatch
};