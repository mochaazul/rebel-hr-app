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

import { pokemon } from './Pokemon';
import { userSlice } from './User';

const persistConfig = {
	key: 'root',
	storage
};

const rootReducer = combineReducers({
	user: userSlice.reducer,
	[pokemon.reducerPath]: pokemon.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [
	pokemon.middleware
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

export { store, persistor };
