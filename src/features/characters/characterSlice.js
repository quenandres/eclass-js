import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: "1",
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    }
]

export const characterSlice = createSlice({
    name:'favorites',
    initialState,
    reducers: { //Funciones
        addFavorite:(state, action) => {
            //state.push(action.payload);
            state = [...state, action.payload];
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
