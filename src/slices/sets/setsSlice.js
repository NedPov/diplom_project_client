import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// ПОЛУЧЕНИЕ СЕТОВ
export const loadSets = createAsyncThunk('sauces/loadSets', async () =>{
    return [{title: "sets1", description: "qwerty", id: 1, price: '1850'}, {title: "sets2", description: "asdfgh", id: 2, price: '1300'}, {title: "sets3", description: "zxcvbn", id: 3, price: '1150'},];
});



const initialState = {
    sets: [],
};


const setsSlice = createSlice({
    name: "sets",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadSets.fulfilled, (state, action) => {
                state.sets = action.payload;
            })
    }
});


export default setsSlice.reducer;