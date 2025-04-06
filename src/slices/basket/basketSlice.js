import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// =========================================

// Добавление продукта
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



// НАЧАЛЬНОЕ СОСТОЯНИЕ
const initialState = {
    basketArray: JSON.parse(localStorage.getItem('basketArr')) || [],
    // basketArray: [],
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
                state.basketArray.push(action.payload);

                localStorage.setItem('basketArr', JSON.stringify(state.basketArray));
            })
            // Уменьшение
            .addCase(decreaseBasketEl.fulfilled, (state, action) => {
                const product = state.basketArray.find(basketEl => basketEl.id === action.payload);
                if (product) {
                    if (product.quantity == 1){
                        state.basketArray = state.basketArray.filter(basketArr => basketArr.id !== action.payload);
                    }
                        product.quantity--;
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

    }
});



export default basketSlice.reducer;










