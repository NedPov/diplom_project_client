import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// ПОЛУЧЕНИЕ ГУНКАНОВ
export const loadGuncans = createAsyncThunk('guncans/loadGuncans', async () =>{
    return [{title: "guncans1", description: "qwerty", id: 1, price: '1850'}, {title: "guncans2", description: "asdfgh", id: 2, price: '1300'}, {title: "guncans3", description: "zxcvbn", id: 3, price: '1150'},]
});


const initialState = {
    guncans: []
};


const guncansSlice = createSlice({
    name: "guncans",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
            .addCase(loadGuncans.fulfilled, (state, action) =>{
                state.guncans = action.payload;
            });
    }
})


export default guncansSlice.reducer;



