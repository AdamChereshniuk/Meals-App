import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center mt-50">
            <h1 className="text-orange-500 text-4xl font-bold">Error 404</h1>

            <p className="mt-4 mb-4">Page not found :(</p>
            
            <Link
                className="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
                to="/"
            >
                Go back to Home
            </Link>
        </div>
    );
};