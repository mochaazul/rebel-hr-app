export const generateStore = () => {
  return `
  import {
    Action,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
  import homeReducer from './home'
  import {postReducer} from './post'
  
  export const store = configureStore({
    reducer: {
       home: homeReducer,
       post: postReducer
    },
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
     ReturnType,
     RootState,
     unknown,
     Action<string>
   >;
  `
}