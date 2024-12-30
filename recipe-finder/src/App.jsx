import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import RecipeList from "./Components/RecipeList";
import RecipeDetails from "./Components/RecipeDetails";
import ErrorMessage from "./Components/ErrorMessage";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  const fetchRecipes = async (query) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      if (data.meals) {
        setRecipes(data.meals);
        setError("");
      } else {
        setRecipes([]);
        setError("No recipes found.");
      }
    } catch (err) {
      setError("Error fetching recipes. Please try again later.");
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchRecipes(query);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
    </div>
  );
};

export default App;
