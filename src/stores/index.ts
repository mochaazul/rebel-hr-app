import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import errorHandlerMiddleware from 'middlewares/errorHandlerMiddleware';
import { userSlice } from './User';
import { articleSlice } from './Articles';

const persistConfig = {
  key: 'root',
  storage
};

const reducers = combineReducers({
  [articleSlice.name]: articleSlice.reducer,
  [userSlice.name]: userSlice.reducer
});

const middlewares = [
  errorHandlerMiddleware,
  // Put your custom middleware here
];

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ]
      },
    }).concat(middlewares),
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production'
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };