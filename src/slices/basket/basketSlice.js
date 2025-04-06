import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// =========================================

// Добавление продукта
export const addBasketEl = createAsyncThunk('basket/addBasketEl', async ( set ) => {
    // return {title, description, price };
    console.log(set);
});

// Удаление продукта
export const deleteBasketEl = createAsyncThunk('basket/deleteBasketEl', async (id) => {
    return id;
});
// =========================================



// НАЧАЛЬНОЕ СОСТОЯНИЕ
const initialState = {
    basketArray: JSON.parse(localStorage.getItem('basketArr')) || [],
};


// СЛАЙС
const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Добавление продукта
            .addCase(addBasketEl.fulfilled, (state, action) => {
                state.basketArray.push(action.payload);
                localStorage.setItem('basketArr', JSON.stringify(state.basketArray));
            })

            // Удаление продукта
            .addCase(deleteBasketEl.fulfilled, (state, action) => {
                state.basketArray = state.basketArray.filter(basketArr => basketArr.id !== action.payload);
            })

    }
});



export default basketSlice.reducer;










