import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// ПОЛУЧЕНИЕ СЕТОВ
export const loadSets = createAsyncThunk('sauces/loadSets', async () =>{
    return [{title: "sets1", description: "qwerty", id: 1, price: '1850'}, {title: "sets2", description: "asdfgh", id: 2, price: '1300'}, {title: "sets3", description: "zxcvbn", id: 3, price: '1150'},];
});

export const loadDiscountSets = createAsyncThunk('sets/loadDiscountSets', async () =>{
    return [{title: "discountSets1", description: "qwerty", id: 1, price: '1850'}, {title: "discountSets2", description: "asdfgh", id: 2, price: '1300'}, {title: "discountSets3", description: "zxcvbn", id: 3, price: '1150'},];

})



const initialState = {
    sets: [],
    discountSets: [],
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
            .addCase(loadDiscountSets.fulfilled, (state, action) => {
                state.discountSets = action.payload;
            })
    }
});


export default setsSlice.reducer;