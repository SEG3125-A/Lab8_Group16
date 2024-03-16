import React from "react";
import { NavLink } from "react-router-dom"

function Navbar() {
    return (<nav className="menu">
        <div className="menu-logo">FitnessFusion</div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="workouts">Workouts</NavLink>
        <NavLink to="/meals">Meals</NavLink>
        <NavLink to="/calculators">Calculators</NavLink>
        <NavLink to="/news">News</NavLink>
    </nav>)
}
export default Navbar;