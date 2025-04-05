import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchDrinks, addDrinks, editDrinks, deleteDrinks } from "./drinks";


// FETCH ЗАПРОСЫ
// =========================================
// Получение всех сетов
export const loadDrinks = createAsyncThunk('drinks/loadDrinks', async () => {
    return await fetchDrinks();
});

// Добавление сета
export const addFetchDrinks = createAsyncThunk('drinks/addFetchDrinks', async ({ title, description, price }) => {
    return await addDrinks({ title, description, price });
});

// отправка на сервер измененного сета
export const editFetchDrinks = createAsyncThunk('drinks/editFetchDrinks', async (title, description, price, drinksId) => {
    return await editDrinks({ title, description, price, drinksId });
});

// Удаление сета
export const deleteFetchDrinks = createAsyncThunk('drinks/deleteFetchDrinks', async (id) => {
    return await deleteDrinks(id);
});
// =========================================



// НАЧАЛЬНОЕ СОСТОЯНИЕ
const initialState = {
    drinks: [],
    error: '',
    message: '',
};


// СЛАЙС
const drinksSlice = createSlice({
    name: "drinks",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        // Получение всех наптков
                    .addCase(loadDrinks.fulfilled, (state, action) => {
                        state.drinks = action.payload;
                    })
                    .addCase(loadDrinks.rejected, (state, action) => {
                        state.error = action.payload;
                    })
                    // Добавление напитка
                    .addCase(addFetchDrinks.fulfilled, (state, action) => {
                        state.drinks.push(action.payload);
                    })
                    .addCase(addFetchDrinks.rejected, (state, action) => {
                        state.error = action.payload;
                    })
                    // Изменение напитка
                    .addCase(editFetchDrinks.fulfilled, (state, action) => {
                        // state.sets.push(action.payload);
                    })
                    .addCase(editFetchDrinks.rejected, (state, action) => {
                        state.error = action.payload;
                    })
                    // Удаление напитка
                    .addCase(deleteFetchDrinks.fulfilled, (state, action) => {
                        state.drinks = state.drinks.filter(drink => drink.id !== action.payload);
                    })
                    .addCase(deleteFetchDrinks.rejected, (state, action) => {
                        state.error = action.payload;
                    })
    }
});



export default drinksSlice.reducer;










