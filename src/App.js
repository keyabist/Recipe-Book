import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import Filter from './components/Filter';

function App() {
  const [recipes, setRecipes] = useState([]); // State for storing recipes
  const [categoryFilter, setCategoryFilter] = useState(''); // State for category filter
  const [favourites, setFavourites] = useState([]); // State for favourite recipes

  // Load recipes and favourites from localStorage when the component mounts
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(storedRecipes); // Populate recipes state with stored data

    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites); // Populate favourites state
  }, []);

  // Function to add a new recipe
  const addRecipe = (recipe) => {
    const newRecipes = [...recipes, { ...recipe, id: Date.now() }];
    setRecipes(newRecipes); // Update recipes state
    localStorage.setItem('recipes', JSON.stringify(newRecipes)); // Save to localStorage
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
    <div>
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
