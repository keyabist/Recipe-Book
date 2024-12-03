import React, { useState } from 'react';
import RecipeItem from './RecipeItem';
import RecipeDetail from './RecipeDetail';

const RecipeList = ({ recipes, categoryFilter, favourites, toggleFavourite }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const filteredRecipes = recipes.filter(recipe =>
        (categoryFilter ? recipe.category === categoryFilter : true) &&
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="recipe-list">
            <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            {filteredRecipes.length === 0 ? (
                <p>No recipes available.</p>
            ) : (
                filteredRecipes.map((recipe) => (
                    recipe && <RecipeItem
                        key={recipe.id}
                        recipe={recipe}
                        isFavourite={favourites.includes(recipe.id)}
                        toggleFavourite={toggleFavourite}
                        onViewRecipe={() => setSelectedRecipe(recipe)}
                    />
                ))
            )}
            {selectedRecipe && (
                <RecipeDetail
                    recipe={selectedRecipe}
                    onClose={() => setSelectedRecipe(null)}
                    toggleFavourite={toggleFavourite}
                    isFavourite={favourites.includes(selectedRecipe.id)}
                />
            )}
        </div>
    );
};

export default RecipeList;

