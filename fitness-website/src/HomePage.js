import React from 'react';
import photo from './image.png';
import workoutImage from './workout.png';
import './App.css';

function HomePage() {
    return (
        <div className="container">
            <div className="HomePage">
                <div className="header">
                    <div className="menu">
                        <div className="menu-logo">FitnessFusion</div>
                        <button className="menu-button">Home</button>
                        <button className="menu-button">Workouts</button>
                        <button className="menu-button">Meals</button>
                        <button className="menu-button">Calculators</button>
                        <button className="menu-button">News</button>
                    </div>
                </div>
                <div className="content">
                    <img src={photo} alt="Photo" className="photo" />
                    <img src={workoutImage} alt="Workout" className="workout-image" />
                    <section className="services">
                        <h2>Our Services</h2>
                        <div className="service-buttons">
                            <button className="service-button">Custom Workout Plan</button>
                            <button className="service-button">Custom Diet Plan</button>
                            <button className="service-button">Calculators</button>
                        </div>
                    </section>
                    <section className="faq">
                        <h2>FAQs</h2>
                        <ul>
                            <li>How does the BMI calculator work?</li>
                            <li>How long should I workout for?</li>
                            <li>What are the different types of training?</li>
                            <li>Do I need to lift weights to workout?</li>
                            <li>Why do you collect my age?</li>
                            <li>How much do workout plans and fitness plans cost?</li>
                            <li>I have dietary restrictions, can I get a fitness plan that accommodates them?</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default HomePage;