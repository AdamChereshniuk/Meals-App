import type { IIngredient } from "../data/ingredients";
import { filterMealsByIngredient } from "../filter";
import { Meals } from "../components/Meals";
import { useParams } from "react-router-dom";
import INGREDIENTS from "../data/ingredients";

export function MealsByIngredientPage() {
    const { ingredient } = useParams();

    let currentIngredient: IIngredient = INGREDIENTS[0];
    INGREDIENTS.forEach(ing => {
        if(ing.strIngredient === ingredient) currentIngredient = ing;
    });
    
    const meals = filterMealsByIngredient(currentIngredient);

    return (
        <>
            <div className="p-8 pb-0">
                <h1 className="text-4xl font-bold mb-4 text-orange-500">Meals for {currentIngredient.strIngredient}</h1>
            </div>

            <Meals meals={meals} />
        </>
    );
};