import * as React from 'react';
import {useEffect, useState} from "react";
import {Chip} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";


function filter(mealFilters, dietFilters, meals) {
    // get all filters
    let filteredMeals = meals;

    console.log(mealFilters.length)
    if (mealFilters.length > 0) {
        filteredMeals = meals.filter((meal) => {
            for (let i = 0; i < mealFilters.length; i++) {
                if (mealFilters[i].value && meal.mealtime === mealFilters[i].label) {
                    return true
                }
            }
            return false;
        })
    }

    if (dietFilters.length > 0) {
        filteredMeals = filteredMeals.filter((meal) => {
            for (let i = 0; i< meal.dietaryRestrictions.length; i++) {
                for (let j = 0; j < dietFilters.length; j++) {
                    if (dietFilters[j].value && meal.dietaryRestrictions[i] === dietFilters[j].label) {
                        return true
                    }
                }
            }
            return false;
        })
    }
    return filteredMeals
}


function Meals() {
    const [meals, setMeals] = useState(null)
    const [dietFilters, setDietFilter] = React.useState([
        {key: 0, label: 'vegan', value: false},
        {key: 1, label: 'vegetarian', value: false},
    ]);
    const [mealFilter, setMealFilter] = React.useState([
        {key: 0, label: 'breakfast', value: false},
        {key: 1, label: 'lunch', value: false},
        {key: 1, label: 'dinner', value: false},
    ]);

    useEffect(() => {
        fetch("http://localhost:8000/meals")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setMeals(data) //update data
            })
    }, []);

    const handleDietFilterClick = (chipToToggle) => () => {
        setDietFilter((dietFilters) => dietFilters.map((chip => {
            if (chip === chipToToggle)
                chip.value = !chip.value
            return chip;
        })))

        fetch("http://localhost:8000/meals")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setMeals(filter(mealFilter.filter(meal => meal.value), dietFilters.filter(meal => meal.value), data)) //update data
            })
    };

    const handleMealFilterClick = (chipToToggle) => () => {
        setMealFilter((dietFilters) => dietFilters.map((chip => {
            if (chip === chipToToggle)
                chip.value = !chip.value
            return chip;
        })))

        fetch("http://localhost:8000/meals")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setMeals(filter(mealFilter.filter(meal => meal.value), dietFilters.filter(meal => meal.value), data)) //update data
            })
    };


    return (
        <div>
            <h1>Meals</h1>
            <div className={"filters"}>
                <p>Dietary restrictions</p>
                {dietFilters.map((data) => {
                    return (
                        <Chip
                            icon={data.value ? <CheckCircle/> : ''}
                            label={data.label}
                            color={'primary'}
                            variant={data.value ? '' : 'outlined'}
                            onClick={handleDietFilterClick(data)}
                        />
                    );
                })}

                <p>Meal</p>
                {mealFilter.map((data) => {
                    return (
                        <Chip
                            icon={data.value ? <CheckCircle/> : ''}
                            label={data.label}
                            color={'primary'}
                            variant={data.value ? '' : 'outlined'}
                            onClick={handleMealFilterClick(data)}
                        />
                    );
                })}
            </div>
            <div className="flex-grid">
                {meals && meals.map(meal => (
                    <MealCard meal={meal}/>
                ))}
            </div>
        </div>
    )
}

function MealCard({meal}) {
    return (
        <div id={meal.id} className="workout-card">
            <h2>{meal.name}</h2>
            <p>{meal.description}</p>
            <p><b>Calories:</b> {meal.calories} cal</p>
            <p><b>Price</b> {meal.price}</p>
        </div>
    )
}

export default Meals;