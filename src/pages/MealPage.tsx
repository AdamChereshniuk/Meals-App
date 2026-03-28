import type { IMeal } from "../data/meals";
import { YouTubeButton } from "../components/YouTubeButton";
import { useParams } from "react-router-dom";
import MEALS from "../data/meals";

export function MealPage() {
    const { id } = useParams();

    let meal: IMeal = MEALS[0];
    MEALS.forEach(el => {
        if(el.idMeal === id) meal = el;
    });

    return (
        <>
            <div className="max-w-[800px] mx-auto p-8">
                <h1 className="text-4xl font-bold mb-5 text-orange-500">{meal.strMeal}</h1>
                <img className="w-full max-w-[100%]" src={meal.strMealThumb} alt={meal.strMeal} />

                <div className="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
                    <div>
                        <strong className="font-bold">Category:</strong> {meal.strCategory}
                    </div>
                    <div>
                        <strong className="font-bold">Area:</strong> {meal.strArea}
                    </div>
                    <div>
                        <strong className="font-bold">Tags:</strong> {meal.strTags}
                    </div>
                </div>

                <div className="my-3">{meal.strInstructions}</div>

                <div className="grid grid-cols-2 sm:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>

                        <ul>
                            {meal.strIngredient1?.trim() && <li key={1}>1. {meal.strIngredient1?.trim()}</li>}
                            {meal.strIngredient2?.trim() && <li key={2}>2. {meal.strIngredient2?.trim()}</li>}
                            {meal.strIngredient3?.trim() && <li key={3}>3. {meal.strIngredient3?.trim()}</li>}
                            {meal.strIngredient4?.trim() && <li key={4}>4. {meal.strIngredient4?.trim()}</li>}
                            {meal.strIngredient5?.trim() && <li key={5}>5. {meal.strIngredient5?.trim()}</li>}
                            {meal.strIngredient6?.trim() && <li key={6}>6. {meal.strIngredient6?.trim()}</li>}
                            {meal.strIngredient7?.trim() && <li key={7}>7. {meal.strIngredient7?.trim()}</li>}
                            {meal.strIngredient8?.trim() && <li key={8}>8. {meal.strIngredient8?.trim()}</li>}
                            {meal.strIngredient9?.trim() && <li key={9}> 9. {meal.strIngredient9?.trim()}</li>}
                            {meal.strIngredient10?.trim() && <li key={10}>10. {meal.strIngredient10?.trim()}</li>}
                            {meal.strIngredient11?.trim() && <li key={11}>11. {meal.strIngredient11?.trim()}</li>}
                            {meal.strIngredient12?.trim() && <li key={12}>12. {meal.strIngredient12?.trim()}</li>}
                            {meal.strIngredient13?.trim() && <li key={13}>13. {meal.strIngredient13?.trim()}</li>}
                            {meal.strIngredient14?.trim() && <li key={14}>14. {meal.strIngredient14?.trim()}</li>}
                            {meal.strIngredient15?.trim() && <li key={15}>15. {meal.strIngredient15?.trim()}</li>}
                            {meal.strIngredient16?.trim() && <li key={16}>16. {meal.strIngredient16?.trim()}</li>}
                            {meal.strIngredient17?.trim() && <li key={17}>17. {meal.strIngredient17?.trim()}</li>}
                            {meal.strIngredient18?.trim() && <li key={18}>18. {meal.strIngredient18?.trim()}</li>}
                            {meal.strIngredient19?.trim() && <li key={19}>19. {meal.strIngredient19?.trim()}</li>}
                            {meal.strIngredient20?.trim() && <li key={20}>20. {meal.strIngredient20?.trim()}</li>}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Measures</h2>

                        <ul>
                            {meal.strMeasure1?.trim() && <li key={1}>1. {meal.strMeasure1}</li>}
                            {meal.strMeasure2?.trim() && <li key={2}>2. {meal.strMeasure2}</li>}
                            {meal.strMeasure3?.trim() && <li key={3}>3. {meal.strMeasure3}</li>}
                            {meal.strMeasure4?.trim() && <li key={4}>4. {meal.strMeasure4}</li>}
                            {meal.strMeasure5?.trim() && <li key={5}>5. {meal.strMeasure5}</li>}
                            {meal.strMeasure6?.trim() && <li key={6}>6. {meal.strMeasure6}</li>}
                            {meal.strMeasure7?.trim() && <li key={7}>7. {meal.strMeasure7}</li>}
                            {meal.strMeasure8?.trim() && <li key={8}>8. {meal.strMeasure8}</li>}
                            {meal.strMeasure9?.trim() && <li key={9}>9. {meal.strMeasure9}</li>}
                            {meal.strMeasure10?.trim() && <li key={10}>10. {meal.strMeasure10}</li>}
                            {meal.strMeasure11?.trim() && <li key={11}>11. {meal.strMeasure11}</li>}
                            {meal.strMeasure12?.trim() && <li key={12}>12. {meal.strMeasure12}</li>}
                            {meal.strMeasure13?.trim() && <li key={13}>13. {meal.strMeasure13}</li>}
                            {meal.strMeasure14?.trim() && <li key={14}>14. {meal.strMeasure14}</li>}
                            {meal.strMeasure15?.trim() && <li key={15}>15. {meal.strMeasure15}</li>}
                            {meal.strMeasure16?.trim() && <li key={16}>16. {meal.strMeasure16}</li>}
                            {meal.strMeasure17?.trim() && <li key={17}>17. {meal.strMeasure17}</li>}
                            {meal.strMeasure18?.trim() && <li key={18}>18. {meal.strMeasure18}</li>}
                            {meal.strMeasure19?.trim() && <li key={19}>19. {meal.strMeasure19}</li>}
                            {meal.strMeasure20?.trim() && <li key={20}>20. {meal.strMeasure20}</li>}
                        </ul>
                    </div>

                    <div className="mt-4">
                        <YouTubeButton href={meal.strYoutube} text="YouTube" />

                        <a
                            className="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
                            href={String(meal.strSource)}
                            target="_blank"
                        >
                            View Original Source
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};