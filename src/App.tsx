import { HomePage, IngredientsPage, MealsByNamePage, MealsByLetterPage, MealsByIngredientPage, MealPage } from "./pages/";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import "./App.css";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter basename="/Meals-App/">
      <Header />

      <main className="px-[15px]">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/by-name/:name?" element={<MealsByNamePage />} />
          <Route path="/by-letter/:letter?" element={<MealsByLetterPage />} />
          <Route path="/by-ingredient/:ingredient" element={<MealsByIngredientPage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/meal/:id" element={<MealPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;