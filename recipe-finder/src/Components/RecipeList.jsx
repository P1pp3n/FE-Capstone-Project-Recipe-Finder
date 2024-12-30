import React from "react";
import RecipeCard from "../Components/RecipeCard";

const RecipeList = ({ recipes, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default RecipeList;
