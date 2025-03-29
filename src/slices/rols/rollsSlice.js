import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ПОЛУЧЕНИЕ РОЛЛОВ
export const loadRolls = createAsyncThunk('rolls/loadRolls', async () =>{
    return [{title: "rolls1", description: "qwerty", id: 1, price: '1850'}, {title: "rolls2", description: "asdfgh", id: 2, price: '1300'}, {title: "rolls3", description: "zxcvbn", id: 3, price: '1150'},]
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










