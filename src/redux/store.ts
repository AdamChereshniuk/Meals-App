import { configureStore } from "@reduxjs/toolkit";
import mealsByNameSlice from "./Slices/mealsByNameSlice";
import mealsByLetterSlice from "./Slices/mealsByLetterSlice";
import currentIngredientSlice from "./Slices/currentIngredientSlice";
import ingredientsSlice from "./Slices/ingredientsSlice";
import currentMealSlice from "./Slices/currentMealSlice";

export const store = configureStore({
    reducer: {
        mealsByName: mealsByNameSlice,
        mealsByLetter: mealsByLetterSlice,
        currentIngredient: currentIngredientSlice,
        ingredients: ingredientsSlice,
        currentMeal: currentMealSlice,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];