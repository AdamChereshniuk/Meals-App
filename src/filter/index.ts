import type { IIngredient } from "../data/ingredients";
import type { IMeal } from "../data/meals";
import MEALS from "../data/meals";

export function truncateWords(str: string, count: number) {
  if (!str) return str;

  return str.split(" ").slice(0, count).join(" ");
};

export function filterMealsByName(name: string) {
  if (!name) return [];

  const result: IMeal[] = [];
  MEALS.forEach(meal => {
    if(String(meal.strMeal).toLowerCase().includes(String(name).toLocaleLowerCase())) result.push(meal);
  });

  return result;
};

export function filterMealsByLetter(letter: string) {
  if (!letter) return [];

  const result: IMeal[] = [];
  MEALS.forEach(meal => {
    if(String(meal.strMeal).charAt(0).toUpperCase() === String(letter).toUpperCase()) result.push(meal);
  });

  return result;
};

export function filterMealsByIngredient(ingredient: IIngredient) {
  if (!ingredient) return [];

  const result: IMeal[] = [];
  MEALS.forEach(meal => {
    let doesMealHaveIngredient = false;

    for(const entry of Object.entries(meal)) {
      if(entry[0].includes("strIngredient") && String(entry[1]).toLowerCase().includes(ingredient.strIngredient.toLowerCase())) doesMealHaveIngredient = true;
    };

    if(doesMealHaveIngredient) result.push(meal);
  });

  return result;
};