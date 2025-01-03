import React, { useState, useEffect } from "react";
import "../Styles/Searchbar.css";

const SearchBar = ({ onSearch, placeholderText = "Search for recipes..." }) => {
  const [query, setQuery] = useState("");
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch random recipes from TheMealDB API
  useEffect(() => {
    const fetchRandomRecipes = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(
          Array.from({ length: 3 }).map(() =>
            fetch("https://www.themealdb.com/api/json/v1/1/random.php")
          )
        );
        const recipes = await Promise.all(responses.map((res) => res.json()));
        setRandomRecipes(recipes.map((r) => r.meals[0]));
      } catch (error) {
        console.error("Error fetching random recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomRecipes();
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setError(""); // Clear the error when the user starts typing
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    } else {
      setError("Please enter a valid search term.");
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholderText}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}

      {/* Placeholder content for when no search is performed */}
      {!query && (
        <div className="search-placeholder">
          <h2 className="placeholder-title">Not sure what to search for?</h2>
          <p className="placeholder-subtitle">
            Explore some random recipes for inspiration!
          </p>
          {loading ? (
            <p className="loading-message">Fetching recipes...</p>
          ) : (
            <div className="random-recipes">
              {randomRecipes.map((recipe) => (
                <div
                  key={recipe.idMeal}
                  className="random-recipe-card"
                  onClick={() => onSearch(recipe.strMeal)}
                >
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="recipe-thumbnail"
                  />
                  <h3 className="recipe-title">{recipe.strMeal}</h3>
                  <p className="recipe-category">{recipe.strCategory}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
