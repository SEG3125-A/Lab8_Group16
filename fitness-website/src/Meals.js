import {useEffect, useState} from "react";

function Meals() {
    const [meals, setMeals] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8000/meals")
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setMeals(data) //update data
            })
    }, []);


    return(
        <div>
            <h1>Meals</h1>
            <div className="flex-grid">
                {meals && meals.map(meal => (
                    <MealCard meal={meal}/>
                ))}
            </div>
        </div>
    )
}

function MealCard({meal}) {
    return(
        <div id={meal.id} className="workout-card">
            <h2>{meal.name}</h2>
            <p>{meal.description}</p>
            <p><b>Calories:</b> {meal.calories} cal</p>
            <p><b>Price</b> {meal.price}</p>
        </div>
    )
}

export default Meals;