


import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
//Be sure to import your Header component Filter is not needed throws a warning so you can either get rid of it or comment out 
import Header from "./Header";
// import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // function onDarkModeClick() {
  //   setIsDarkMode((isDarkMode) => !isDarkMode);
  // }
  function onDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />
      {/* <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header> 
      copy and paste this code into our return of the Header component be sure it is in the return of the component 
      JSX always goes into the return of a component */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
