import React from 'react';

const Filter = ({ categoryFilter, setCategoryFilter }) => {
    return (
        <div className="filter">
            <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
            >
                <option value="">All Categories</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    );
};

export default Filter;

