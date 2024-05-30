import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: "userData",
    initialState: {
        userid: null,
        username: null,
        data: {
            gender: null,
            age: null,
            weight: null,
            height: null,
            targetWeight: null,
            lifestyle: null,
            // targetDate: null,
        },
    },
    reducers: {
        setUserData: (state, action) => {
            state.userid = action.payload.userid;
            state.username = action.payload.user;
            state.data = action.payload.data;
        },
    },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
