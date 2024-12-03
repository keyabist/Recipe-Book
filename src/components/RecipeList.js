import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({ recipes, categoryFilter, favourites, toggleFavourite }) {
    const filteredRecipes = recipes.filter(recipe =>
        categoryFilter ? recipe.category === categoryFilter : true
    );

    return (
        <div>
            {filteredRecipes.length === 0 ? (
                <p>No recipes available.</p>
            ) : (
                filteredRecipes.map(recipe => (
                    <RecipeItem
                        key={recipe.id}
                        recipe={recipe}
                        isFavourite={favourites.includes(recipe.id)}
                        toggleFavourite={toggleFavourite}
                    />
                ))
            )}
        </div>
    );
}

export default RecipeList;
