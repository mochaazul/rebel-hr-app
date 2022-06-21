import {
  TypedUseSelectorHook, useDispatch, useSelector
} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AppDispatch, RootState } from 'stores';
import usePrevious from './usePrevious';
import useCountDown from './useCountdown';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const useNavigateApp = useNavigate;

export {
  useAppDispatch,
  useTypedSelector,
  useNavigateApp,
  usePrevious,
  useCountDown
};