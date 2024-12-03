import React from 'react';

function RecipeItem({ recipe, isFavourite, toggleFavourite }) {
    return (
        <div>
            <h3>{recipe.title}</h3>
            <p>{recipe.category}</p>
            <button onClick={() => toggleFavourite(recipe.id)}>
                {isFavourite ? 'Unfavourite' : 'Favourite'}
            </button>
        </div>
    );
}

export default RecipeItem;
