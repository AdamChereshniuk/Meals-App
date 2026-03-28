import { Meals } from "../components/Meals";
import MEALS, { type IMeal } from "../data/meals";

export function HomePage() {
    const randomMeals: IMeal[] = [];
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * 101);
        if(!randomMeals.includes(MEALS[randomIndex])) {
            randomMeals.push(MEALS[randomIndex]);
        } else {
            i--;
        };
    };

    return (
        <>
            <div className="p-8 pb-0 text-orange-500">
                <h1 className="text-4xl font-bold mb-4">Random Meals</h1>
            </div>
            
            <Meals meals={randomMeals} />
        </>
    );
};