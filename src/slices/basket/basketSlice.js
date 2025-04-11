import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { addFetchOrders, deleteOrders, fetchOrder, completeOrders, fetchMyOrder } from "./basket";

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


// СЕРВЕРНАЯ ЧАСТЬ
// =========================================
// Получение всех заказов
export const loadOrders = createAsyncThunk('basket/loadOrders', async () => {
    return await fetchOrder();
});

// Получение ЛИЧНЫX заказов
export const loadMyOrders = createAsyncThunk('basket/loadMyOrders', async (id) => {
    return await fetchMyOrder(id);
});

// Отправка заказа на сервер
export const submittingOrder = createAsyncThunk('basket/submittingOrder', async ({ basketArr, tel, name, address, userId }) => {
    return await addFetchOrders({ basketArr, tel, name, address, userId });
});

// Заказ приготовлен
export const completedOrder = createAsyncThunk('basket/completedOrder', async (id) => {
    return await completeOrders(id);
});

// Удаление заказа с сервера
export const deleteOrder = createAsyncThunk('basket/deleteOrder', async (id) => {
    return await deleteOrders(id);
});

// =========================================



// НАЧАЛЬНОЕ СОСТОЯНИЕ
const initialState = {
    basketArray: JSON.parse(localStorage.getItem('basketArr')) || [],
    orderArray: [],
    MyOrderArray: [],
    error: '',
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
                    if (product.quantity == 1) {
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
            // =========================================================================================
            // Получение всех заказов
            .addCase(loadOrders.fulfilled, (state, action) => {
                let Arr = [];
                for (let i = 0; i < action.payload.length; i++) {
                    action.payload[i].basketArr = JSON.parse(action.payload[i].basketArr);
                    Arr.push(action.payload[i]);
                }
                state.orderArray = Arr;
                console.log(Arr);
            })
            .addCase(loadOrders.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Получение ЛИЧНЫX заказов
            .addCase(loadMyOrders.fulfilled, (state, action) => {
                let Arr = [];
                for (let i = 0; i < action.payload.length; i++) {
                    action.payload[i].basketArr = JSON.parse(action.payload[i].basketArr);
                    Arr.push(action.payload[i]);
                }
                state.MyOrderArray = Arr;
                console.log(Arr);
            })
            .addCase(loadMyOrders.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Отправка заказа на сервер
            .addCase(submittingOrder.fulfilled, (state, action) => {
                // Обнуляем массив для корзины
                state.basketArray = [];
                localStorage.removeItem('basketArr');
                // массив для заказов
                state.orderArray = [...state.orderArray, action.payload];
                localStorage.setItem('orders', JSON.stringify(state.orderArray));
                console.log(action.payload);
            })
            .addCase(submittingOrder.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Заказ приготовлен
            .addCase(completedOrder.fulfilled, (state, action) => {
                const order = state.orderArray.find(orderEl => orderEl.id == action.payload);
                console.log(order)
                if (order) { order.completed = !order.completed };
            })
            .addCase(completedOrder.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Удаление заказа
            .addCase(deleteOrder.fulfilled, (state, action) => {
                console.log(action.payload)
                console.log(state.orderArray)
                state.orderArray = state.orderArray.filter(orderEl => orderEl.id != action.payload);
                console.log(state.orderArray)
            })
            .addCase(deleteOrder.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
});



export default basketSlice.reducer;










