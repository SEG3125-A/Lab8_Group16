import React from 'react';
import photo from './image.png';
import workoutImage from './workout.png';
import './App.css';

function HomePage() {
    return (
        <div className="container">
            <div className="HomePage">
                <div className="content">
                    <img src={photo} alt="Photo" className="photo" />
                    <img src={workoutImage} alt="Workout" className="workout-image" />
                    <section className="services">
                        <h2>Our Services</h2>
                        <div className="service-buttons">
                            {/*<Card name={"Custom Workout Plan"} image_src={workoutImage} description={"description... workouts"}></Card>*/}
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

function Card({image_src, name, description}) {
    return(
        <div className={"workout-card"}>
            <img src={image_src} alt={name}></img>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default HomePage;