import { createSlice } from "@reduxjs/toolkit";

const nutritionDataSlice = createSlice({
    name: "nutritionData",
    initialState: {
        userId: "",
        bmr: 0,
        tdee: 0,
        targetCaloriesLoss: 0,
        targetCaloriesGain: 0,
        dailyProtein: 0,
        dailyFats: 0,
        dailyCarbs: 0,
    },
    reducers: {
        setNutritionData: (state, action) => {
            state.userId = action.payload.userId;
            state.bmr = action.payload.bmr;
            state.tdee = action.payload.tdee;
            state.targetCaloriesLoss = action.payload.targetCaloriesLoss;
            state.targetCaloriesGain = action.payload.targetCaloriesGain;
            state.dailyProtein = action.payload.dailyProtein;
            state.dailyFats = action.payload.dailyFats;
            state.dailyCarbs = action.payload.dailyCarbs;
        },
    },
});

export const { setNutritionData } = nutritionDataSlice.actions;
export default nutritionDataSlice.reducer;
