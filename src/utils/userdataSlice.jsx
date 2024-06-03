import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: "userData",
    initialState: {
        userid: "",
        username: "",
        useremail: "",
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
            state.userid = action.payload.userId;
            state.username = action.payload.userName;
            state.useremail = action.payload.userEmail;
            state.data = action.payload.data;
        },
    },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
