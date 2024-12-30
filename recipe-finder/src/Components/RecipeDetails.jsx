import React from "react";

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="mt-4 border rounded-lg p-4 shadow-lg">
      <h2 className="font-bold text-xl">{recipe.strMeal}</h2>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-64 object-cover"
      />
      <h3 className="font-semibold mt-2">Ingredients:</h3>
      <ul>
        {Object.keys(recipe)
          .filter((key) => key.startsWith("strIngredient") && recipe[key])
          .map((key, index) => (
            <li key={index}>
              {recipe[key]} - {recipe[`strMeasure${index + 1}`]}
            </li>
          ))}
      </ul>
      <h3 className="font-semibold mt-2">Preparation Instructions:</h3>
      <p>{recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <div className="mt-2">
          <h3 className="font-semibold">Watch on YouTube:</h3>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${
              recipe.strYoutube.split("=")[1]
            }`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <a
        href={recipe.strSource}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 block"
      >
        View Full Recipe
      </a>
    </div>
  );
};

export default RecipeDetails;
