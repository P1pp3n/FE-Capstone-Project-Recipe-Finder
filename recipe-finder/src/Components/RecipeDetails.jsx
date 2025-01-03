import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        setError(null); // Clear previous errors
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.meals) {
          setRecipe(data.meals[0]);
        } else {
          setError("Recipe not found.");
        }
      } catch (err) {
        setError("Failed to fetch recipe details. Please try again.");
      }
    };

    fetchRecipeDetails();
  }, [id]);

  // Add Recipe to Favorites List
  const addToFavorites = () => {
    if (!recipe) return;

    const currentFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorite = currentFavorites.some(
      (item) => item.idMeal === recipe.idMeal
    );

    if (!isAlreadyFavorite) {
      const updatedFavorites = [...currentFavorites, recipe];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      alert("Recipe added to favorites!");
    } else {
      alert("This recipe is already in your favorites.");
    }
  };

  if (error) {
    return <div className="text-red-600 p-4">{error}</div>;
  }

  if (!recipe) {
    return <div className="text-center p-4 animate-pulse">Loading...</div>;
  }

  const ingredients = Object.keys(recipe)
    .filter((key) => key.startsWith("strIngredient") && recipe[key])
    .map((key, index) => ({
      ingredient: recipe[key],
      measure: recipe[`strMeasure${key.replace("strIngredient", "")}`],
    }));

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-6">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-64 object-cover rounded-md shadow-md animate-fade-in"
      />
      <div className="animate-slide-in-bottom">
        <h1 className="text-2xl font-bold mt-4">{recipe.strMeal}</h1>
        <p className="text-gray-600">
          {recipe.strCategory} | {recipe.strArea}
        </p>
      </div>
      <div className="animate-fade-in">
        <h2 className="text-xl font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside">
          {ingredients.map((item, index) => (
            <li key={index}>
              {item.ingredient}: {item.measure}
            </li>
          ))}
        </ul>
      </div>
      <div className="animate-fade-in">
        <h2 className="text-xl font-semibold">Instructions</h2>
        <p className="whitespace-pre-wrap">{recipe.strInstructions}</p>
      </div>
      {recipe.strYoutube && (
        <div className="mt-4 animate-slide-in-top">
          <h2 className="text-xl font-semibold">Video Tutorial</h2>
          <iframe
            title="Recipe Video"
            src={`https://www.youtube.com/embed/${
              recipe.strYoutube.split("v=")[1]
            }`}
            className="w-full h-64 mt-2 rounded-md shadow-lg"
            allowFullScreen
          />
        </div>
      )}
      <a
        href={recipe.strSource}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        View Full Recipe on TheMealDB
      </a>
      <br />
      <button
        onClick={addToFavorites}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Add to Favorites 
      </button>
    </div>
  );
};

export default RecipeDetails;
