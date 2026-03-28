import { createSlice } from "@reduxjs/toolkit";
import type { IMeal } from "../../data/meals";
import MEALS from "../../data/meals";

export interface currentMealState {
  currentMeal: IMeal,
};
const initialState: currentMealState = {
  currentMeal: MEALS[0],
};

const currentMealSlice = createSlice({
  name: "currentMealSlice",
  initialState,
  reducers: {
    setCurrentMeal: (state, pay: { payload: IMeal }) => {
      state.currentMeal = pay.payload;
    },
  },
});

export const { setCurrentMeal } = currentMealSlice.actions;
export default currentMealSlice.reducer;