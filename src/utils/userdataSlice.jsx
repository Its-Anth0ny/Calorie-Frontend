import { createSlice } from "@reduxjs/toolkit";

const userdataSlice = createSlice({
    name: "userdata",
    initialState: {
        user: null,
        data: {
            weight: null,
            height: null,
            targetWeight: null,
            targetDate: null,
            activityLevel: null,
        },
    },
    reducers: {
        setUserdata: (state, action) => {
            state.user = action.payload.user;
            state.data = action.payload.data;
        },
    },
});

export const { setUserdata } = userdataSlice.actions;
export default userdataSlice.reducer;
