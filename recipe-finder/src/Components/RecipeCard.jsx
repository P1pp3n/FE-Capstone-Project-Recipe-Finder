import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div
      className="bg-white border rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-500">{recipe.strCategory}</p>
        <p className="text-sm text-gray-500">{recipe.strArea}</p>
        <Link
          to={`/recipe/${recipe.idMeal}`}
          className="text-blue-600 hover:underline mt-2 block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
