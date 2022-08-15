import { configureStore } from '@reduxjs/toolkit';
import favoriteReducers from './../features/characters/favoriteSlice';

export const store = configureStore({
    reducer: {
        favorites: favoriteReducers
    }
});