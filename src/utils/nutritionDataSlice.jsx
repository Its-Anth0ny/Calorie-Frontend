import { createSlice } from "@reduxjs/toolkit";

const nutritionDataSlice = createSlice({
    name: "nutritionData",
    initialState: {
        nutritionData: {
            userId: "",
            bmr: 0,
            tdee: 0,
            targetCaloriesLoss: 0,
            targetCaloriesGain: 0,
            dailyProtein: 0,
            dailyFats: 0,
            dailyCarbs: 0,
        },
    },
    reducers: {
        setNutritionData: (state, action) => {
            state.nutritionData = action.payload.data;
        },
    },
});

export const { setNutritionData } = nutritionDataSlice.actions;
export default nutritionDataSlice.reducer;
