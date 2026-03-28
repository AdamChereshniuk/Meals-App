import type { IMeal } from "../data/meals";
import { Link } from "react-router-dom";
import { YouTubeButton } from "./YouTubeButton";
import { truncateWords } from "../filter/index";
import { useDispatch } from "react-redux";
import { setCurrentMeal } from "../redux/Slices/currentMealSlice";

export const MealItem = ({ meal }: { meal: IMeal }) => {
    const url = `/meal/${meal.idMeal}`;
    
    const dispatch = useDispatch();

    return (
        <div className="bg-white shadow rounded-xl hover:scale-105 transition-all flex flex-col flex-1">
            <Link to={url} onClick={() => dispatch(setCurrentMeal(meal))}>
                <img className="rounded-t-xl w-full h-48 object-cover" src={meal.strMealThumb} alt={meal.strMeal} />
            </Link>

            <div className="p-3 flex flex-col flex-1">
                <h3 className="font-bold">{meal.strMeal}</h3>
                <p className="mb-4">{truncateWords(meal.strInstructions, 20)}</p>
                <div className="flex items-center justify-between mt-auto">
                    <YouTubeButton href={meal.strYoutube} text="YouTube" />
                </div>
            </div>
        </div>
    );
};