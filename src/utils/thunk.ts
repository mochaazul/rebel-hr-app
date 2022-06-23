import {
  AsyncThunk, createAsyncThunk, ThunkAction, ThunkDispatch
} from '@reduxjs/toolkit';
import { endpoints } from 'constant';
import { generateQueryString } from 'helpers';
import { Pagination } from 'interface';
import { AppDispatch, store } from 'stores';
import { apiCall } from './api';

type wrapperType<T> = {
  type        : string;
  queryParam? : Record<any, any>;
  pagination? : Pagination;
  method      : 'GET' | 'POST';
  onSuccess?  : (param: {response:unknown, dispatch: ThunkDispatch<any, any, any>}) => void;
  onFailed?   : (param: {error:unknown, dispatch: ThunkDispatch<any, any, any>}) => void;
}

type RequestOptionGenericType = Pagination | Record<any, any>

const thunkWrapper = <T, T2 extends RequestOptionGenericType = RequestOptionGenericType>({
  type,
  method,
  queryParam,
  pagination,
  onSuccess,
  onFailed
}:wrapperType<T>) => {
  
  return createAsyncThunk(type, async(override:T2, thunkAPI) => {
    try {
      thunkAPI.dispatch;
      const safeQueryParam = Object.keys(override).length !== 0 ? { ...override } : {
        ...queryParam,
        ...pagination
      };

      const response = await apiCall<T>({
        endpoint: `${ endpoints.article }?${ generateQueryString({ ...safeQueryParam })
        }`,
        method
      });
      if (onSuccess) onSuccess({
        response,
        dispatch: thunkAPI.dispatch
      });
      return response;
    } catch (error) {
      if (onFailed) onFailed({
        error,
        dispatch: thunkAPI.dispatch
      });
      return thunkAPI.rejectWithValue(error);
    }
  }
  );
};

export default thunkWrapper;