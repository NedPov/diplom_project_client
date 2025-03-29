import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ПОЛУЧЕНИЕ РОЛЛОВ
export const loadRolls = createAsyncThunk('rolls/loadRolls', async () =>{
    return {rolls1: {title: "rolls1", description: "qwerty"}, rolls2: {title: "rolls2", description: "asdfgh"}, rolls3: {title: "rolls3", description: "zxcvbn"},}
})



// НАЧАЛЬНОЕ СОСТОЯНИЕ
const initialState = {
    rolls: []
};


// СЛАЙС
const rollsSlice = createSlice({
    name: "rolls",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(loadRolls.fulfilled, (state, action) => {
            state.rolls = action.payload;
        })
    }
});



export default rollsSlice.reducer;










