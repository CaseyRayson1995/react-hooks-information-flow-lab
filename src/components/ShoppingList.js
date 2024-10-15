import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter"
// 'selectedCategory' has already been declared. (4:31)
function ShoppingList({ items, selectedCategory: initialCategory }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);

  }
  //commented lines below is not needed because we now have a filter component 
  // function handleCategoryChange(category) {
  //   setSelectedCategory(category);  // Update selectedCategory
  // }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      {/* <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div> 
      move these lines into our return in the filter component */}
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
