import itemDataSlice from "./itemDataSlice";
import nutritionDataSlice from "./nutritionDataSlice";
import userDataSlice from "./userDataSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        userData: userDataSlice,
        itemData: itemDataSlice,
        nutritionData: nutritionDataSlice,
    },
});

export default store;
