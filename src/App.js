import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]); // State for storing recipes
  const [categoryFilter, setCategoryFilter] = useState(''); // State for category filter
  const [favourites, setFavourites] = useState([]); // State for favourite recipes

  // Load recipes and favourites from localStorage when the component mounts
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    setRecipes(storedRecipes.filter(recipe => recipe && recipe.title)); // Filter out any invalid recipes

    const storedFavourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    setFavourites(storedFavourites);
  }, []);

  // Function to add a new recipe
  const addRecipe = (recipe) => {
    if (recipe && recipe.title) {
      const newRecipe = { ...recipe, id: Date.now() };
      const newRecipes = [...recipes, newRecipe];
      setRecipes(newRecipes);
      localStorage.setItem('recipes', JSON.stringify(newRecipes));
    }
  };

  // Function to toggle a recipe as favourite
  const toggleFavourite = (id) => {
    const newFavourites = favourites.includes(id)
      ? favourites.filter(favId => favId !== id) // Remove from favourites if already there
      : [...favourites, id]; // Add to favourites if not already there
    setFavourites(newFavourites); // Update favourites state
    localStorage.setItem('favourites', JSON.stringify(newFavourites)); // Save to localStorage
  };

  return (
    <div className="container">
      <h1>My Recipe App</h1>
      <Filter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList
        recipes={recipes}
        categoryFilter={categoryFilter}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
}

export default App;

