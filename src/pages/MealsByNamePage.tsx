import type { IMeal } from "../data/meals";
import { useDispatch } from "react-redux";
import { setMealsByName } from "../redux/Slices/mealsByNameSlice";
import { filterMealsByName } from "../filter";
import { useAppSelector } from "../redux/hooks";
import { Meals } from "../components/Meals";

export function MealsByNamePage() {
    const meals: IMeal[] = useAppSelector((state) => state.mealsByName.mealsByName);

    const dispatch = useDispatch();

    return (
        <>
            <div className="p-8 pb-0">
                <h1 className="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
            </div>
            
            <div className="px-8 pb-3">
                <input
                    className="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
                    placeholder="Search for Meals"
                    type="text"
                    onChange={(e) => dispatch(setMealsByName(filterMealsByName(e.target.value.trim())))}
                />
            </div>

            <Meals meals={meals} />
        </>
    );
};