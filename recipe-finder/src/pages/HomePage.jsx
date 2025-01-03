import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Homepage.css";

const Homepage = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [loadingPopular, setLoadingPopular] = useState(true);
  const [loadingSimilar, setLoadingSimilar] = useState(true);
  const navigate = useNavigate();

  // Fetch random recipes for Popular Recipes section
  useEffect(() => {
    const fetchPopularRecipes = async () => {
      try {
        setLoadingPopular(true);
        const responses = await Promise.all(
          Array.from({ length: 6 }).map(() =>
            fetch("https://www.themealdb.com/api/json/v1/1/random.php")
          )
        );
        const recipes = await Promise.all(responses.map((res) => res.json()));
        setPopularRecipes(
          recipes
            .filter((r) => r.meals && r.meals.length > 0)
            .map((r) => r.meals[0])
        );
      } catch (error) {
        console.error("Error fetching popular recipes:", error);
      } finally {
        setLoadingPopular(false);
      }
    };

    fetchPopularRecipes();
  }, []);

  // Fetch random recipes for Similar Recipes section
  useEffect(() => {
    const fetchSimilarRecipes = async () => {
      try {
        setLoadingSimilar(true);
        const responses = await Promise.all(
          Array.from({ length: 3 }).map(() =>
            fetch("https://www.themealdb.com/api/json/v1/1/random.php")
          )
        );
        const recipes = await Promise.all(responses.map((res) => res.json()));
        setSimilarRecipes(
          recipes
            .filter((r) => r.meals && r.meals.length > 0)
            .map((r) => r.meals[0])
        );
      } catch (error) {
        console.error("Error fetching similar recipes:", error);
      } finally {
        setLoadingSimilar(false);
      }
    };

    fetchSimilarRecipes();
  }, []);

  const handleRecipeClick = (idMeal) => {
    navigate(`/recipe/${idMeal}`);
  };

  // Navigates to search page
  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value.trim()) {
      navigate(`/search?query=${event.target.value.trim()}`);
    }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero bg-cream text-center py-16">
        <h1 className="hero-title text-4xl md:text-6xl font-bold text-black">
          Discover Delicious Recipes
        </h1>
        <p className="hero-subtitle text-lg mt-4 text-gray-700">
          Search for your favorite dish and explore detailed recipes.
        </p>
        <input
          type="text"
          placeholder="Search recipes..."
          className="search-box px-4 py-2 mt-6 border rounded-full shadow-lg text-gray-800"
          onKeyDown={handleSearchKeyDown}
        />
      </header>

      {/* Popular Recipes Section */}
      <section className="popular-recipes py-16 bg-gray-100">
        <div className="mb-8 text-left pl-6">
          <h2 className="section-title text-2xl font-bold mb-2">
            Popular Recipes
          </h2>
          <p className="text-gray-600">
            A handpicked selection of recipes everyone loves!
          </p>
        </div>
        {loadingPopular ? (
          <p className="loading-message text-center">
            Fetching popular recipes...
          </p>
        ) : (
          <div className="triangle-layout relative">
            {popularRecipes.map((recipe, index) => {
              const positions = [
                { top: "0%", left: "50%", transform: "translate(-50%, 0)" },
                { top: "30%", left: "35%", transform: "translate(-50%, 0)" },
                { top: "30%", left: "65%", transform: "translate(-50%, 0)" },
                { top: "60%", left: "20%", transform: "translate(-50%, 0)" },
                { top: "60%", left: "50%", transform: "translate(-50%, 0)" },
                { top: "60%", left: "80%", transform: "translate(-50%, 0)" },
              ];
              return (
                <div
                  key={recipe.idMeal}
                  className="circle-recipe"
                  style={positions[index]}
                  onClick={() => handleRecipeClick(recipe.idMeal)}
                >
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="circle-img"
                  />
                  <h3 className="recipe-title">{recipe.strMeal}</h3>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Similar Recipes Section */}
      <section className="similar-recipes py-16 bg-white">
        <div className="mb-8 text-center">
          <h2 className="section-title text-2xl font-bold mb-2">
            Similar Recipes
          </h2>
          <p className="text-gray-600">Try these hand-selected dishes!</p>
        </div>
        {loadingSimilar ? (
          <p className="loading-message text-center">
            Fetching similar recipes...
          </p>
        ) : (
          <div className="recipes-display grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {similarRecipes.map((recipe) => (
              <div
                key={recipe.idMeal}
                className="circle-recipe"
                onClick={() => handleRecipeClick(recipe.idMeal)}
              >
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="circle-img"
                />
                <h3 className="recipe-title">{recipe.strMeal}</h3>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Homepage;
