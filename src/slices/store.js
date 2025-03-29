import { configureStore } from "@reduxjs/toolkit";

import rollsSlice from './rols/rollsSlice';


export default configureStore({
    reducer: {
        rolls: rollsSlice,
    },
});



