import { configureStore } from "@reduxjs/toolkit";

import rollsSlice from './rols/rollsSlice';
import saucesSlice from './sauces/saucesSlice';
import setsSlice from './sets/setsSlice';
import sushiSlice from './sushi/sushiSlice';
import drinksSlice from './drinks/drinksSlice';


export default configureStore({
    reducer: {
        rolls: rollsSlice,
        sauces: saucesSlice,
        sets: setsSlice,
        sushi: sushiSlice,
        drinks: drinksSlice,
    },
});



