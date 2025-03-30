import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// ПОЛУЧЕНИЕ СОУСОВ
export const loadSauces = createAsyncThunk('sauces/loadSauces', async () =>{
    return [{title: "sauces1", description: "qwerty", id: 1, price: '1850'}, {title: "sauces2", description: "asdfgh", id: 2, price: '1300'}, {title: "sauces3", description: "zxcvbn", id: 3, price: '1150'},];
});



const initialState = {
    sauces: [],
};


const saucesSlice = createSlice({
    name: "sauces",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadSauces.fulfilled, (state, action) => {
                state.sauces = action.payload;
            })
    }
});


export default saucesSlice.reducer;
