import type { IIngredient } from "../../data/ingredients";
import { createSlice } from "@reduxjs/toolkit";
import INGREDIENTS from "../../data/ingredients";

export interface ingredientsState {
  ingredients: IIngredient[],
};
const initialState: ingredientsState = {
  ingredients: INGREDIENTS,
};

const ingredientsSlice = createSlice({
  name: "ingredientsSlice",
  initialState,
  reducers: {
    setIngredients: (state, pay: { payload: IIngredient[] }) => {
      state.ingredients = pay.payload;
    },
  },
});

export const { setIngredients } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;