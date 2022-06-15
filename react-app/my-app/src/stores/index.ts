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
import { configureStore, MiddlewareAPI, Middleware } from '@reduxjs/toolkit';

import { userSlice } from './User';
import { articleSlice } from './Articles';

const persistConfig = {
	key: 'root',
	storage
};

const rootReducer = combineReducers({
	[articleSlice.name]: articleSlice.reducer,
	[userSlice.name]: userSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware: Middleware =
	(api: MiddlewareAPI) => (next) => (action) => {
		if (!navigator.onLine && action.type.includes('rejected')) {
			alert('check you internet connection');
		}

		return next(action);
	};


const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(middleware),
	devTools: process.env.NODE_ENV !== 'production'
});
const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export { store, persistor };
