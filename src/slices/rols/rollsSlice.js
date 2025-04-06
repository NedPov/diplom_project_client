import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import { fetchRolls, addRolls, editRolls, deleteRolls } from "./rolls";

// // ПОЛУЧЕНИЕ РОЛЛОВ
// export const loadRolls = createAsyncThunk('rolls/loadRolls', async () =>{
//     return [{title: "rolls1", description: "qwerty", id: 1, price: '1850'}, {title: "rolls2", description: "asdfgh", id: 2, price: '1300'}, {title: "rolls3", description: "zxcvbn", id: 3, price: '1150'},]
// });


// FETCH ЗАПРОСЫ
// =========================================
// Получение всех роллов
export const loadRolls = createAsyncThunk('rolls/loadRolls', async () => {
    return await fetchRolls();
});

// Добавление ролла
export const addFetchRolls = createAsyncThunk('rolls/addFetchRolls', async ({ title, description, price, productType  }) => {
    return await addRolls({ title, description, price, productType  });
});

// отправка на сервер измененного ролла
export const editFetchRolls = createAsyncThunk('rolls/editFetchRolls', async (title, description, price, setsId) => {
    return await editRolls({ title, description, price, setsId });
});

// Удаление ролла
export const deleteFetchRolls = createAsyncThunk('rolls/deleteFetchRolls', async (id) => {
    return await deleteRolls(id);
});
// =========================================



// НАЧАЛЬНОЕ СОСТОЯНИЕ
const initialState = {
    rolls: [],
    error: '',
    message: '',
};


// СЛАЙС
const rollsSlice = createSlice({
    name: "rolls",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Получение всех роллов
            .addCase(loadRolls.fulfilled, (state, action) => {
                state.rolls = action.payload;
            })
            .addCase(loadRolls.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Добавление ролла
            .addCase(addFetchRolls.fulfilled, (state, action) => {
                state.rolls.push(action.payload);
            })
            .addCase(addFetchRolls.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Изменение ролла
            .addCase(editFetchRolls.fulfilled, (state, action) => {
                // state.rolls.push(action.payload);
            })
            .addCase(editFetchRolls.rejected, (state, action) => {
                state.error = action.payload;
            })
            // Удаление ролла
            .addCase(deleteFetchRolls.fulfilled, (state, action) => {
                state.rolls = state.rolls.filter(roll => roll.id !== action.payload);
            })
            .addCase(deleteFetchRolls.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
});


export default rollsSlice.reducer;










