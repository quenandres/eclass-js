import { configureStore } from '@reduxjs/toolkit';
import favoriteReducers from './../features/characters/characterSlice';

export const store = configureStore({
    reducer: {
        favorites: favoriteReducers
    }
});