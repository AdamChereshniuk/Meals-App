import type { IMeal } from "../../data/meals";
import { createSlice } from "@reduxjs/toolkit";

export interface mealsByNameState {
  mealsByName: IMeal[],
};
const initialState: mealsByNameState = {
  mealsByName: [],
};

const mealsByNameSlice = createSlice({
  name: "mealsByNameSlice",
  initialState,
  reducers: {
    setMealsByName: (state, pay: { payload: IMeal[] }) => {
      state.mealsByName = pay.payload;
    },
  },
});

export const { setMealsByName } = mealsByNameSlice.actions;
export default mealsByNameSlice.reducer;