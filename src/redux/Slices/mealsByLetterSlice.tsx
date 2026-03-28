import type { IMeal } from "../../data/meals";
import { createSlice } from "@reduxjs/toolkit";

export interface mealsByLetterState {
  mealsByLetter: IMeal[],
};
const initialState: mealsByLetterState = {
  mealsByLetter: [],
};

const mealsByLetterSlice = createSlice({
  name: "mealsByLetterSlice",
  initialState,
  reducers: {
    setMealsByLetter: (state, pay: { payload: IMeal[] }) => {
      state.mealsByLetter = pay.payload;
    },
  },
});

export const { setMealsByLetter } = mealsByLetterSlice.actions;
export default mealsByLetterSlice.reducer;