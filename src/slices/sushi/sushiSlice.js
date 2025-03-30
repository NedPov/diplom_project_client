import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// ПОЛУЧЕНИЕ СУШИ
export const loadSushi = createAsyncThunk('sauces/loadSushi', async () =>{
    return [{title: "sushi1", description: "qwerty", id: 1, price: '1850'}, {title: "sushi2", description: "asdfgh", id: 2, price: '1300'}, {title: "sushi3", description: "zxcvbn", id: 3, price: '1150'},];
});



const initialState = {
    sushi: [],
};


const sushiSlice = createSlice({
    name: "sushi",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadSushi.fulfilled, (state, action) => {
                state.sauces = action.payload;
            })
    }
});


export default sushiSlice.reducer;