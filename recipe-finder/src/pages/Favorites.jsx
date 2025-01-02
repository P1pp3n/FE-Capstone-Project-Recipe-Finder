import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Add a recipe to favorites (can be called from other components)
  const addFavorite = (recipe) => {
    const existingFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorited = existingFavorites.some(
      (fav) => fav.idMeal === recipe.idMeal
    );

    if (!isAlreadyFavorited) {
      const updatedFavorites = [...existingFavorites, recipe];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  // Remove a recipe from favorites
  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.idMeal !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">Your Favorites</h2>
        <p className="text-gray-600">
          No favorite recipes yet. Start exploring and add some!
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-6xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-center">Your Favorite Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
              <Link
                to={`/recipe/${recipe.idMeal}`}
                className="text-blue-600 hover:underline"
              >
                View Details
              </Link>
              <button
                onClick={() => removeFavorite(recipe.idMeal)}
                className="block mt-2 text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
