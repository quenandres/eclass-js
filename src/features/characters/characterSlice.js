import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const characterSlice = createSlice({
    name:'favorites',
    initialState,
    reducers: { //Funciones
        addFavorite:(state, action) => {
            state.push(action.payload);
            //const { payload } = action;
            //state = [...state, payload];
        },
        deleteFavorite: (state, action) => {
            const characterFound = state.find(task => task.id === action.payload);
            if(characterFound) {
                state.splice(state.indexOf(characterFound), 1);
            }
        }
    }
});

export const { addFavorite, deleteFavorite } = characterSlice.actions;

export default characterSlice.reducer;
