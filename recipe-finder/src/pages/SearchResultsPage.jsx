import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import RecipeCard from "../Components/RecipeCard";

const SearchResultsPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const fetchRecipes = async (query) => {
    try {
      setError(null); // Clear any previous errors
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
        setError("No recipes found. Try a different search term.");
      }
    } catch (err) {
      setError("Failed to fetch recipes. Please try again later.");
    }
  };

  return (
    <div>
      <SearchBar onSearch={fetchRecipes} />
      {error && <div className="text-red-600 p-4">{error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
