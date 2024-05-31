import itemDataSlice from "./itemDataSlice";
import userDataSlice from "./userDataSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        userData: userDataSlice,
        itemData: itemDataSlice,
    },
});

export default store;
