import { createSlice } from "@reduxjs/toolkit";

const presentNutritionSlice = createSlice({
    name: "presentNutrition",
    initialState: {
        calories: 0,
        protein: 0,
        fats: 0,
        carbs: 0,
        fiber: 0,
    },
    reducers: {
        setInitialNutrition: (state, action) => {
            state.calories = action.payload.calories;
            state.protein = action.payload.protein;
            state.fats = action.payload.fats;
            state.carbs = action.payload.carbs;
            state.fiber = action.payload.fiber;
        },
        setNewItemNutrition: (state, action) => {
            state.calories = state.calories + action.payload.calories;
            state.protein = state.protein + action.payload.protein;
            state.fats = state.fats + action.payload.fats;
            state.carbs = state.carbs + action.payload.carbs;
            state.fiber = state.fiber + action.payload.fiber;
        },
    },
});

export const { setNewItemNutrition, setInitialNutrition } =
    presentNutritionSlice.actions;
export default presentNutritionSlice.reducer;
