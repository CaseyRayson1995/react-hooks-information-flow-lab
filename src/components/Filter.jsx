//! Create a Filter component by refactoring the <select> element out of the ShoppingList component. 
//! Changing the selection in the dropdown should still change which items are displayed in the shopping list.
//! You will need to pass a callback function as a prop called onCategoryChange to the Filter component in order for the test to pass.
//step1: create a Filter component 
//step2: we no longer need the <divclassname=filter> in the shoppingList.js we want our ffilter component to handle this 




import React from 'react';
function Filter({ selectedCategory, onCategoryChange }) {
    return (
        <div className="Filter">
            {/* <select name="filter" 
            onChange={handleCategoryChange}> */}
            <select name="filter"
                onChange={(e) => onCategoryChange(e.target.value)} >
                <option value="All">Filter by category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    );
};
export default Filter; 