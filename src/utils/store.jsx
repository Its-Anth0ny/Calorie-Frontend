import userDataSlice from "./userDataSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        userData: userDataSlice,
    },
});

export default store;
