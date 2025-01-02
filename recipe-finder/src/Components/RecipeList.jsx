import React from "react";
import RecipeCard from "../Components/RecipeCard";

const RecipeList = ({ recipes, onSelect }) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
      role="list"
      aria-label="Recipe List"
    >
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default RecipeList;
