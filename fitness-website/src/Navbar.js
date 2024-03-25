import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ toggleLanguage }) {
    return (
        <nav className="menu">
            <div className="menu-logo">FitnessFusion</div>
            <NavLink to="/" className="menu-button">Home</NavLink>
            <NavLink to="workouts" className="menu-button">Workouts</NavLink>
            <NavLink to="/meals" className="menu-button">Meals</NavLink>
            <NavLink to="/calculators" className="menu-button">Calculators</NavLink>
            <NavLink to="/news" className="menu-button">News</NavLink>
            {/* Language toggle button */}
            <button className="menu-button" onClick={toggleLanguage}>
                Switch Language
            </button>
        </nav>
    );
}

export default Navbar;
