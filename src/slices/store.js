import { configureStore } from "@reduxjs/toolkit";

import rollsSlice from './rols/rollsSlice';
import guncansSlice from './guncans/guncansSlice';
import saucesSlice from './sauces/saucesSlice';
import setsSlice from './sets/setsSlice';
import sushiSlice from './sushi/sushiSlice';


export default configureStore({
    reducer: {
        rolls: rollsSlice,
        guncans: guncansSlice,
        sauces: saucesSlice,
        sets: setsSlice,
        sushi: sushiSlice,
    },
});



