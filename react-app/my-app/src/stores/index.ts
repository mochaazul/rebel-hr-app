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
import { configureStore, isRejectedWithValue, MiddlewareAPI, Middleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { userApi, userSlice } from './User';
import { articlesApi, articleSlice } from './Articles';

const persistConfig = {
	key: 'root',
	storage
};

const rootReducer = combineReducers({
	[userApi.reducerPath]: userApi.reducer,
	[articlesApi.reducerPath]: articlesApi.reducer,
	[articleSlice.name]: articleSlice.reducer,
	[userSlice.name]: userSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Handling errors at a macro level​
const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => (next) => (action) => {
		// RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
		if (isRejectedWithValue(action)) {
			console.warn('We got a rejected action!');
		}

		return next(action);
	};

const middleware = [
	rtkQueryErrorLogger,
	articlesApi.middleware,
	userApi.middleware,
];

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			}
		}).concat(middleware),
	devTools: process.env.NODE_ENV !== 'production'
});
const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);


export { store, persistor };
