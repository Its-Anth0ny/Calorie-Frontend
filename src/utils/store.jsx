import itemDataSlice from "./itemDataSlice";
import nutritionDataSlice from "./nutritionDataSlice";
import presentNutritionSlice from "./presentNutritionSlice";
import userDataSlice from "./userDataSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        userData: userDataSlice,
        itemData: itemDataSlice,
        nutritionData: nutritionDataSlice,
        presentNutrition: presentNutritionSlice,
    },
});

export default store;
