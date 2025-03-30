import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ПОЛУЧЕНИЕ НАПИТКОВ
export const loadDrinks = createAsyncThunk('drinks/loadDrinks', async () =>{
    return [{title: "drinks1", description: "qwerty", id: 1, price: '1850'}, {title: "drinks2", description: "asdfgh", id: 2, price: '1300'}, {title: "drinks3", description: "zxcvbn", id: 3, price: '1150'},]
});



// НАЧАЛЬНОЕ СОСТОЯНИЕ
const initialState = {
    drinks: []
};


// СЛАЙС
const drinksSlice = createSlice({
    name: "drinks",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(loadDrinks.fulfilled, (state, action) => {
            state.drinks = action.payload;
        })
    }
});



export default drinksSlice.reducer;










