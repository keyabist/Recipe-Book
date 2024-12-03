import React from 'react';

const RecipeItem = ({ recipe, isFavourite, toggleFavourite, onViewRecipe }) => {
    if (!recipe) {
        return null;
    }

    return (
        <div className={`recipe-item ${isFavourite ? 'favorite' : ''}`}>
            <h3>{recipe.title || 'Untitled Recipe'}</h3>
            <p>{recipe.category || 'Uncategorized'}</p>
            <button className="view-recipe-btn" onClick={onViewRecipe}>View Recipe</button>
            <button
                className={`favorite-btn ${isFavourite ? 'active' : ''}`}
                onClick={() => toggleFavourite(recipe.id)}
            >
                {isFavourite ? 'Unfavourite' : 'Favourite'}
            </button>
        </div>
    );
};

export default RecipeItem;

