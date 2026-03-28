import type { IMeal } from "../data/meals";
import { MealItem } from "./Mealtem";

export const Meals = ({ meals }: { meals: IMeal[] }) => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-5 px-8 pb-8">
            {meals.map((meal, index) => <MealItem meal={meal} key={index} />)}
        </div>
    );
};