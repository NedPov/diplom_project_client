import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// =========================================

// Добавление продукта
export const addBasketEl = createAsyncThunk('basket/addBasketEl', async ({ title, description, price }) => {
    return {title, description, price };
});

// Удаление продукта
export const deleteBasketEl = createAsyncThunk('basket/deleteBasketEl', async (id) => {
    return id;
});
// =========================================



// НАЧАЛЬНОЕ СОСТОЯНИЕ
const initialState = {
    basketArray: [],
};


// СЛАЙС
const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Добавление напитка
            .addCase(addBasketEl.fulfilled, (state, action) => {
                state.basketArray.push(action.payload);
            })

            // Удаление напитка
            .addCase(deleteBasketEl.fulfilled, (state, action) => {
                state.basketArray = state.basketArray.filter(basketArr => basketArr.id !== action.payload);
            })

    }
});



export default basketSlice.reducer;










