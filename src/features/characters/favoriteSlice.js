import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const favoriteSlice = createSlice({
    name:'favorites',
    initialState,
    reducers: { //Funciones
        addFavorite:(state, action) => {
            const {character} = action.payload;

            state.push(character);
        },
        deleteFavorite: (state, action) => {
            const characterFound = state.find(task => task.id === action.payload);
            if(characterFound) {
                state.splice(state.indexOf(characterFound), 1);
            }
        }
    }
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
