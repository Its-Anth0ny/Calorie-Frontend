import userdataSlice from "./userdataSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        userdata: userdataSlice,
    },
});

export default store;
