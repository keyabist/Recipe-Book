import React, { useState } from 'react';

function RecipeForm({ addRecipe }) {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [category, setCategory] = useState('Breakfast');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form reload
        addRecipe({ title, ingredients, instructions, category });
        // Reset the form fields
        setTitle('');
        setIngredients('');
        setInstructions('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Recipe Title"
                required
            />
            <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Ingredients"
                required
            />
            <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Instructions"
                required
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
            </select>
            <button type="submit">Add Recipe</button>
        </form>
    );
}

export default RecipeForm;
