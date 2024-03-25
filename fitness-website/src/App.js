import React, { useState } from 'react';
import './App.css';
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Workouts from "./Workouts";
import Meals from "./Meals";
import News from "./News";
import Calculators from "./Calculators";

function App() {
    const [language, setLanguage] = useState('english');

    const toggleLanguage = () => {
        setLanguage(language === 'english' ? 'french' : 'english');
    };

    return (
        <div className="App">
            <BrowserRouter>
                <header>
                    <Navbar toggleLanguage={toggleLanguage} language={language} />
                </header>
                <main>
                    <Routes>
                        <Route index element={<HomePage language={language} />} />
                        <Route path="workouts" element={<Workouts language={language} />} />
                        <Route path="meals" element={<Meals language={language} />} />
                        <Route path="calculators" element={<Calculators language={language} />} />
                        <Route path="news" element={<News language={language} />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
