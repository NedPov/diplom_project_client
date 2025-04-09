import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { addFetchOrders } from "./basket";

// =========================================

// Добавление продукта в корзину
export const addBasketEl = createAsyncThunk('basket/addBasketEl', async (product) => {
    console.log(product);
    return product;
});

// Уменьшение количества
export const decreaseBasketEl = createAsyncThunk('basket/decreaseBasketEl', async (id) => {
    // console.log(product);
    return id;
})

// Увеличение количества
export const increaseBasketEl = createAsyncThunk('basket/increaseBasketEl', async (id) => {
    // console.log(product);
    return id;
})

// Удаление продукта
export const deleteBasketEl = createAsyncThunk('basket/deleteBasketEl', async (id) => {
    return id;
});
// =========================================


// Отправка заказа на сервер
export const submittingOrder = createAsyncThunk('basket/submittingOrder', async ({basketArr, tel, name, address, user_id}) =>{
    return await addFetchOrders({basketArr, tel, name, address, user_id});
});





// НАЧАЛЬНОЕ СОСТОЯНИЕ
const initialState = {
    basketArray: JSON.parse(localStorage.getItem('basketArr')) || [],
    orderArray: [],
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
                for (let i = 0; i < state.basketArray.length; i++) {
                    if (state.basketArray[i].id == action.payload.id) {
                        state.basketArray[i].quantity++;
                        console.log('уже есть');
                        localStorage.setItem('basketArr', JSON.stringify(state.basketArray));
                        return
                    }
                }
                state.basketArray = [...state.basketArray, action.payload];
                
                localStorage.setItem('basketArr', JSON.stringify(state.basketArray));
            })
            // Уменьшение
            .addCase(decreaseBasketEl.fulfilled, (state, action) => {
                const product = state.basketArray.find(basketEl => basketEl.id === action.payload);
                if (product) {
                    if (product.quantity == 1){
                        state.basketArray = state.basketArray.filter(basketArr => basketArr.id !== action.payload);
                    } else {
                        product.quantity--;
                    }
                };
                localStorage.setItem('basketArr', JSON.stringify(state.basketArray));
            })
            // Увеличение
            .addCase(increaseBasketEl.fulfilled, (state, action) => {
                const product = state.basketArray.find(basketEl => basketEl.id === action.payload);
                if (product) { product.quantity++ };
                localStorage.setItem('basketArr', JSON.stringify(state.basketArray));
            })

            // Удаление продукта
            .addCase(deleteBasketEl.fulfilled, (state, action) => {
                state.basketArray = state.basketArray.filter(basketArr => basketArr.id !== action.payload);
                localStorage.setItem('basketArr', JSON.stringify(state.basketArray));
            })
            // Отправка заказа на сервер
            .addCase(submittingOrder.fulfilled, (state, action) => {
                state.orderArray = [...state.orderArray, action.payload];
                console.log(action.payload);
            })
    }
});



export default basketSlice.reducer;










