import { createSlice } from "@reduxjs/toolkit";

const itemDataSlice = createSlice({
    name: "itemData",
    initialState: {
        fooditems: [],
    },
    reducers: {
        setInitialData: (state, action) => {
            state.fooditems = action.payload;
        },
        setNewItemData: (state, action) => {
            state.fooditems.push(action.payload);
        },
    },
});

export const { setInitialData, setNewItemData } = itemDataSlice.actions;
export default itemDataSlice.reducer;
