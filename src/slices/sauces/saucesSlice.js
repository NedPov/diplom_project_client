import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import { fetchSauces, addSauces, editSauces, deleteSauces } from "./sauces";


// FETCH ЗАПРОСЫ
// =========================================
// Получение всех соусов
export const loadSauces = createAsyncThunk('sauces/loadSauces', async () => {
    return await fetchSauces();
});

// Добавление соуса
export const addFetchSauces = createAsyncThunk('sauces/addFetchSauces', async ({ title, description, price, productType, quantity  }) => {
    return await addSauces({ title, description, price, productType, quantity  });
});

// отправка на сервер измененного соуса
export const editFetchSauces = createAsyncThunk('sauces/editFetchSauces', async (title, description, price, saucesId) => {
    return await editSauces({ title, description, price, saucesId });
});

// Удаление соуса
export const deleteFetchSauces = createAsyncThunk('sauces/deleteFetchSauces', async (id) => {
    return await deleteSauces(id);
});
// =========================================


// Начальное состояние
const initialState = {
    sauces: [],
    error: '',
    message: '',
};


const saucesSlice = createSlice({
    name: "sauces",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Получение всех соусов
            .addCase(loadSauces.fulfilled, (state, action) => {
                state.sauces = action.payload;
            })
            .addCase(loadSauces.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Добавление соуса
            .addCase(addFetchSauces.fulfilled, (state, action) => {
                state.sauces.push(action.payload);
            })
            .addCase(addFetchSauces.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Изменение соуса
            .addCase(editFetchSauces.fulfilled, (state, action) => {
                // state.sauces.push(action.payload);
            })
            .addCase(editFetchSauces.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Удаление соуса
            .addCase(deleteFetchSauces.fulfilled, (state, action) => {
                state.sauces = state.sauces.filter(sauce => sauce.id !== action.payload);
            })
            .addCase(deleteFetchSauces.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
});


export default saucesSlice.reducer;
