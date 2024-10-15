//! Create a Header component by refactoring the <header> element out of the App component. 
//! Clicking on the <button> inside of the Header component should still toggle dark mode on and off.
//step1: create a header component 
//step2: we no longer need the header in the app.js we want our header component to handle this 
import React from 'react';

function Header({ isDarkMode, onDarkModeClick }) {
    return (<header>
        <h2>Shopster</h2>
        <button onclick={onDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
    );
};
export default Header