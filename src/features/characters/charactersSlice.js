import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const charactersSlice = createSlice({
    name:'characters',
    initialState,
    reducers: { 
        assignCharacters: (state, action) => {
            state.push(...action.payload);
        }
    }
});

export const { assignCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
