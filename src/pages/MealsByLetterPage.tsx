import type { IMeal } from "../data/meals";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { filterMealsByLetter } from "../filter";
import { setMealsByLetter } from "../redux/Slices/mealsByLetterSlice";
import { Meals } from "../components/Meals";

export function MealsByLetterPage() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const meals: IMeal[] = useAppSelector((state) => state.mealsByLetter.mealsByLetter);

    const dispatch = useDispatch();

    return (
        <>
            <div className="p-8 pb-0">
                <h1 className="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
            </div>

            <div className="flex flex-wrap justify-center gap-3 px-8 mb-6">
                {letters.map(letter => (
                    <Link
                        className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
                        onClick={() => dispatch(setMealsByLetter(filterMealsByLetter(String(letter))))}
                        key={letter}
                        to={`/by-letter/${letter}?`}
                    >
                        {letter}
                    </Link>
                ))}
            </div>

            <Meals meals={meals} />
        </>
    );
};