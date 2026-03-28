import type { IIngredient } from "../../data/ingredients";
import { createSlice } from "@reduxjs/toolkit";

export interface currentIngredientState {
  currentIngredient: IIngredient,
};
const initialState: currentIngredientState = {
  currentIngredient: {
    "idIngredient": "1",
    "strIngredient": "Chicken",
    "strDescription": "The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. There are more chickens in the world than any other bird or domesticated fowl. Humans keep chickens primarily as a source of food (consuming both their meat and eggs) and, less commonly, as pets. Originally raised for cockfighting or for special ceremonies, chickens were not kept for food until the Hellenistic period (4th\u20132nd centuries BC).\r\n\r\nGenetic studies have pointed to multiple maternal origins in South Asia, Southeast Asia, and East Asia, but with the clade found in the Americas, Europe, the Middle East and Africa originating in the Indian subcontinent. From ancient India, the domesticated chicken spread to Lydia in western Asia Minor, and to Greece by the 5th century BC. Fowl had been known in Egypt since the mid-15th century BC, with the \"bird that gives birth every day\" having come to Egypt from the land between Syria and Shinar, Babylonia, according to the annals of Thutmose III.",
    "strThumb": "https://www.themealdb.com/ingredients/chicken.png",
    "strType": null
  },
};

const currentIngredientSlice = createSlice({
  name: "currentIngredientSlice",
  initialState,
  reducers: {
    setCurrentIngredient: (state, pay: { payload: IIngredient }) => {
      state.currentIngredient = pay.payload;
    },
  },
});

export const { setCurrentIngredient } = currentIngredientSlice.actions;
export default currentIngredientSlice.reducer;