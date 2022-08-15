import { configureStore } from '@reduxjs/toolkit';
import favoriteReducers from './../features/characters/favoriteSlice';
import charactersReducers from './../features/characters/charactersSlice';

export const store = configureStore({
    reducer: {
        favorites: favoriteReducers,
        characters: charactersReducers
    }
});