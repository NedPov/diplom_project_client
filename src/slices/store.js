import { configureStore } from "@reduxjs/toolkit";

import authenticateSlice from './authenticate/authenticateSlice';
import rollsSlice from './rols/rollsSlice';
import saucesSlice from './sauces/saucesSlice';
import setsSlice from './sets/setsSlice';
import sushiSlice from './sushi/sushiSlice';
import drinksSlice from './drinks/drinksSlice';

import basketSlice from './basket/basketSlice';


export default configureStore({
    reducer: {
        authenticate: authenticateSlice,
        rolls: rollsSlice,
        sauces: saucesSlice,
        sets: setsSlice,
        sushi: sushiSlice,
        drinks: drinksSlice,
        basket: basketSlice,
    },
});



