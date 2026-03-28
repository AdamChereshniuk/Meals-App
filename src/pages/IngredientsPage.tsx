import type { IIngredient } from "../data/ingredients";
import { setCurrentIngredient } from "../redux/Slices/currentIngredientSlice";
import { useAppSelector } from "../redux/hooks";
import { setIngredients } from "../redux/Slices/ingredientsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import INGREDIENTS from "../data/ingredients";

export function IngredientsPage() {
    const ingredients: IIngredient[] = useAppSelector((state) => state.ingredients.ingredients);

    const dispatch = useDispatch();

    return (
        <>
            <div className="p-8 pb-0">
                <h1 className="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
            </div>

            <div className="px-8">
                <input
                    className="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
                    type="text"
                    placeholder="Search for Ingredients"
                    onChange={(e) => dispatch(setIngredients(INGREDIENTS.filter(ing => ing.strIngredient.toLowerCase().includes(e.target.value.trim().toLowerCase()))))}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {ingredients.map(ingredient => {
                        const url = `/by-ingredient/${ingredient.strIngredient}`;

                        return (
                            <Link className="block bg-white rounded p-3 mb-3 shadow" to={url} key={ingredient.idIngredient} onClick={() => dispatch(setCurrentIngredient(ingredient))}>
                                <h3 className="text-2xl font-bold mb-2">{ingredient.strIngredient}</h3>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    );
};