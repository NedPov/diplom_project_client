import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchSushi, addSushi, editSushi, deleteSushi } from "./sushi";



// FETCH ЗАПРОСЫ
// =========================================
// Получение всех суши
export const loadSushi = createAsyncThunk('sushi/loadSushi', async () => {
    return await fetchSushi();
});

// Добавление суши
export const addFetchSushi = createAsyncThunk('sushi/addFetchSushi', async ({ title, description, price, productType }) => {
    return await addSushi({ title, description, price, productType });
});

// отправка на сервер измененного суши
export const editFetchSushi = createAsyncThunk('sushi/editFetchSushi', async (title, description, price, setsId) => {
    return await editSushi({ title, description, price, setsId });
});

// Удаление суши
export const deleteFetchSushi = createAsyncThunk('sushi/deleteFetchSushi', async (id) => {
    return await deleteSushi(id);
});
// =========================================



const initialState = {
    sushi: [],
    error: '',
    message: '',
};


const sushiSlice = createSlice({
    name: "sushi",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Получение всех сетов
            .addCase(loadSushi.fulfilled, (state, action) => {
                state.sushi = action.payload;
            })
            .addCase(loadSushi.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Добавление сета
            .addCase(addFetchSushi.fulfilled, (state, action) => {
                state.sushi.push(action.payload);
            })
            .addCase(addFetchSushi.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Изменение сета
            .addCase(editFetchSushi.fulfilled, (state, action) => {
                // state.sushi.push(action.payload);
            })
            .addCase(editFetchSushi.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Удаление сета
            .addCase(deleteFetchSushi.fulfilled, (state, action) => {
                state.sushi = state.sushi.filter(sushiEl => sushiEl.id !== action.payload);
            })
            .addCase(deleteFetchSushi.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
});


export default sushiSlice.reducer;