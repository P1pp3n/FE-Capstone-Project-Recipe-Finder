import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import Footer from "./Components/Footer";
import Favorites from "./pages/Favorites";


const App = () => {
  // Mock data for Homepage
  const mockPopularRecipes = [
    {
      idMeal: "12345",
      strMeal: "Pizza",
      strMealThumb:
        "",
      strCategory: "Main",
      strArea: "Italian",
    },
    {
      idMeal: "67890",
      strMeal: "Sushi",
      strMealThumb: "sushi.jpg",
      strCategory: "Appetizer",
      strArea: "Japanese",
    },
    {
      idMeal: "54321",
      strMeal: "Tacos",
      strMealThumb: "tacos.jpg",
      strCategory: "Snack",
      strArea: "Mexican",
    },
  ];

  const mockSimilarRecipes = [
    {
      idMeal: "11223",
      strMeal: "Pasta",
      strMealThumb: "pasta.jpg",
      strCategory: "Main",
      strArea: "Italian",
    },
    {
      idMeal: "44556",
      strMeal: "Burger",
      strMealThumb: "burger.jpg",
      strCategory: "Fast Food",
      strArea: "American",
    },
    {
      idMeal: "77889",
      strMeal: "Salad",
      strMealThumb: "salad.jpg",
      strCategory: "Healthy",
      strArea: "Mediterranean",
    },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Pass mockPopularRecipes and mockSimilarRecipes as props to HomePage */}
        <Route
          path="/"
          element={
            <HomePage
              popularRecipes={mockPopularRecipes}
              similarRecipes={mockSimilarRecipes}
            />
          }
        />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
