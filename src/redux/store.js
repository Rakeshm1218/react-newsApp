import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {newsApi} from './services/NewsAPI';
import categoryReducer from './feature/categorySlice'

export const store = configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer,
        category: categoryReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware),
});


setupListeners(store.dispatch);