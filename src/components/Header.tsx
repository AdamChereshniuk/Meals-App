import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className="bg-white shadow h-16 flex justify-between items-stretch">
            <NavLink className="inline-flex items-center h-full px-5 text-orange-500 font-bold" to="/">Home</NavLink>

            <div className="flex items-center gap-1">
                <NavLink
                    className="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
                    to="/by-name/:name?"
                >
                    Search Meals
                </NavLink>
                <NavLink
                    className="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
                    to="/by-letter/:letter?"
                >
                    Meals By Letter
                </NavLink>
                <NavLink
                    className="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
                    to="/ingredients"
                >
                    Meals By Ingredients
                </NavLink>
            </div>
        </header>
    );
};