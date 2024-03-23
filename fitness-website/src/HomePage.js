import React from 'react';
import photo from './image.png';
import workoutImage from './workout.png';
import './App.css';



import {ArrowDownward, ExpandLess, ExpandMore} from "@mui/icons-material";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";

function HomePage() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
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

                        <Accordion
                            expandIcon={<ArrowDownward/>}
                            aria-controls="panel1-content"
                            id="panel1-header">
                            <AccordionSummary>How does the BMI calculator work?</AccordionSummary>
                            <AccordionDetails>
                                answer...
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expandIcon={<ArrowDownward/>}
                            aria-controls="panel2-content"
                            id="panel2-header">
                            <AccordionSummary>How long should I workout for?</AccordionSummary>
                            <AccordionDetails>
                                answer...
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expandIcon={<ExpandMore/>}
                            aria-controls="panel3-content"
                            id="panel3-header">
                            <AccordionSummary>What are the different types of training?</AccordionSummary>
                            <AccordionDetails>
                                answer...
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expandIcon={<ExpandMore/>}
                            aria-controls="panel4-content"
                            id="panel4-header">
                            <AccordionSummary>Do I need to lift weights to workout?</AccordionSummary>
                            <AccordionDetails>
                                answer...
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expandIcon={<ArrowDownward/>}
                            aria-controls="panel3-content"
                            id="panel3-header">
                            <AccordionSummary>Why do you collect my age?</AccordionSummary>
                            <AccordionDetails>
                                answer...
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expandIcon={<ArrowDownward/>}
                            aria-controls="panel3-content"
                            id="panel3-header">
                            <AccordionSummary>How much do workout plans and fitness plans cost?</AccordionSummary>
                            <AccordionDetails>
                                answer...
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expandIcon={<ArrowDownward/>}
                            aria-controls="panel3-content"
                            id="panel3-header">
                            <AccordionSummary>I have dietary restrictions, can I get a fitness plan that accommodates them?</AccordionSummary>
                            <AccordionDetails>
                                answer...
                            </AccordionDetails>
                        </Accordion>
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