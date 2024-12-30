import React from "react";

const RecipeCard = ({ recipe, onSelect }) => {
  return (
    <div
      className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
      onClick={() => onSelect(recipe)}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg">{recipe.strMeal}</h2>
        <p className="text-gray-600">
          {recipe.strCategory} - {recipe.strArea}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
