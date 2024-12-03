import React from 'react';

const RecipeDetail = ({ recipe, onClose, toggleFavourite, isFavourite }) => {
    return (
        <div className="recipe-detail-overlay" onClick={onClose}>
            <div className="recipe-detail-content" onClick={(e) => e.stopPropagation()}>
                <h2>{recipe.title}</h2>
                <p><strong>Category:</strong> {recipe.category}</p>
                <h3>Ingredients:</h3>
                <p>{recipe.ingredients}</p>
                <h3>Instructions:</h3>
                <p>{recipe.instructions}</p>
                <button
                    className={`favorite-btn ${isFavourite ? 'active' : ''}`}
                    onClick={() => toggleFavourite(recipe.id)}
                >
                    {isFavourite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default RecipeDetail;


