import React, { useState, useEffect } from 'react';

function RecipeDetail({ recipe, toggleFavourite, deleteRecipe }) {
    return (
        <div>
            <h2>{recipe.title}</h2>
            <h3>Ingredients</h3>
            <p>{recipe.ingredients}</p>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
            <button onClick={() => toggleFavourite(recipe.id)}>
                {recipe.isFavourite ? 'Unfavourite' : 'Favourite'}
            </button>
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
        </div>
    );
}

export default RecipeDetail;
