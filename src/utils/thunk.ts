import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';
import { generateQueryString } from 'helpers';
import { Pagination } from 'interface';
import { apiCall } from './api';

type ThunkUtilsType  = {
  type        : string;
  queryParam? : Record<any, any>;
  pagination? : Pagination;
  method      : 'GET' | 'POST' | 'PUT' | 'DELETE';
  onSuccess?  : (param: {response:unknown, dispatch: ThunkDispatch<any, any, any>}) => void;
  onFailed?   : (param: {error:unknown, dispatch: ThunkDispatch<any, any, any>}) => void;
  endpoint    : string;
}

type RequestOptionGenericType <T>= {
  pagination?: Pagination;
  payload? : T;
  queryParam? : Record<any, any>;
  id?: number;
}

const thunkUtils = <T, T2 extends RequestOptionGenericType<T2> = RequestOptionGenericType<T> >({
  type,
  method,
  queryParam,
  pagination,
  onSuccess,
  onFailed,
  endpoint
}:ThunkUtilsType) => {
  
  return createAsyncThunk(type, async(args:T2, thunkAPI) => {
    try {
      const safeQueryParam = args.queryParam ? args.queryParam : queryParam ? queryParam : {};
      const safePagination = args.pagination ? args.pagination : pagination ? pagination : {};
      const safeEndpoint   = args.id ? `${endpoint}/${args.id}` : endpoint;
      const response = await apiCall<T>({
        endpoint: `${ safeEndpoint }?${ generateQueryString({
          ...safeQueryParam,
          ...safePagination
        })
        }`,
        method,
        payload: { ...args.payload }
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

export default thunkUtils;