import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchSets, addSets, editSets, deleteSets } from "./sets";


// ПОЛУЧЕНИЕ СЕТОВ
// =========================================
// export const loadSets = createAsyncThunk('sets/loadSets', async () =>{
//     return [{title: "sets1", description: "qwerty", id: 1, price: '1850'}, {title: "sets2", description: "asdfgh", id: 2, price: '1300'}, {title: "sets3", description: "zxcvbn", id: 3, price: '1150'},];
// });
// !Нужно переделать?
export const loadDiscountSets = createAsyncThunk('sets/loadDiscountSets', async () => {
    return [{ title: "discountSets1", description: "qwerty", id: 1, price: '1850' }, { title: "discountSets2", description: "asdfgh", id: 2, price: '1300' }, { title: "discountSets3", description: "zxcvbn", id: 3, price: '1150' },];
});
// =========================================

// FETCH ЗАПРОСЫ
// =========================================
// Получение всех сетов
export const loadSets = createAsyncThunk('sets/loadSets', async () => {
    return await fetchSets();
});

// Добавление сета
export const addFetchSets = createAsyncThunk('sets/addFetchSets', async ({ title, description, price }) => {
    return await addSets({ title, description, price });
});

// отправка на сервер измененного сета
export const editFetchSets = createAsyncThunk('sets/editFetchSets', async (title, description, price, setsId) => {
    return await editSets({ title, description, price, setsId });
});

// Удаление сета
export const deleteFetchSets = createAsyncThunk('sets/deleteFetchSets', async (id) => {
    return await deleteSets(id);
});
// =========================================



const initialState = {
    sets: [],
    discountSets: [],
    error: '',
    message: '',
};


const setsSlice = createSlice({
    name: "sets",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadDiscountSets.fulfilled, (state, action) => {
                state.discountSets = action.payload;
            })
            // Получение всех сетов
            .addCase(loadSets.fulfilled, (state, action) => {
                state.sets = action.payload;
            })
            .addCase(loadSets.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Добавление сета
            .addCase(addFetchSets.fulfilled, (state, action) => {
                state.sets.push(action.payload);
            })
            .addCase(addFetchSets.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Изменение сета
            .addCase(editFetchSets.fulfilled, (state, action) => {
                // state.sets.push(action.payload);
            })
            .addCase(editFetchSets.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Удаление сета
            .addCase(deleteFetchSets.fulfilled, (state, action) => {
                state.sets = state.sets.filter(set => set.id !== action.payload);
            })
            .addCase(deleteFetchSets.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
});


export default setsSlice.reducer;