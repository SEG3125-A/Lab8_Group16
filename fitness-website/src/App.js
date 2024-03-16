import './App.css';
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
} from "react-router-dom";
import React from "react";
import Workouts from "./Workouts";
import Meals from "./Meals";
import News from "./News";
import Calculators from "./Calculators";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header>
                    <Navbar/>
                </header>
                <main>
                    <Routes>
                        <Route index element={<HomePage/>}/>
                        <Route path="workouts" element={<Workouts/>}/>
                        <Route path="meals" element={<Meals/>}/>
                        <Route path="calculators" element={<Calculators/>}/>
                        <Route path="news" element={<News/>}/>
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
