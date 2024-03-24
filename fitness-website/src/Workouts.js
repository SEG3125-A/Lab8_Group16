import {useEffect, useState} from "react";
import {Chip} from "@mui/material";
import * as React from "react";
import {CheckCircle} from "@mui/icons-material";

function Workouts() {
    const [workouts, setWorkouts] = useState(null)
    const [workoutFilter, setWorkoutFilter] = React.useState([
        {key: 0, label: "upper body", value: false},
        {key: 1, label: 'lower body', value: false},
        {key: 1, label: 'core', value: false},
    ]);

    useEffect(() => {
        fetch("http://localhost:8000/workouts")
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setWorkouts(data) //update data
            })
    }, []);


    const handleClick = (chipToToggle) => () => {
        setWorkoutFilter((dietFilters) => workoutFilter.map((chip => {
            if (chip === chipToToggle)
                chip.value = !chip.value
            return chip;
        })))

        fetch("http://localhost:8000/workouts")
            .then(res => {
                return res.json()
            })
            .then(data => {

                let filters =  workoutFilter.filter(filter => filter.value)
                let filteredWorkouts

                if (filters === undefined || filters.length === 0) {
                    filteredWorkouts = data
                } else if (data !== undefined) {
                    //filtering acts as OR any of the selected filters (not AND).
                    filteredWorkouts = data.filter(workout => {
                        for (let i = 0; i < workout.target.length; i++) {
                            for (let j = 0; j < filters.length; j++){
                                if (workout.target[i] === filters[j].label) {
                                    return true
                                }
                            }
                        }
                        return false;
                    })
                }

                if (filteredWorkouts.length > 0)
                    setWorkouts(filteredWorkouts);
                else
                    setWorkouts(null)
            })

    };


    return (

        <div className>
            <h1>Workouts</h1>
            <div className={"filters"}>
                <p>Workout target: </p>
                {workoutFilter.map((data) => {
                    return (
                        <Chip
                            icon={data.value ? <CheckCircle/> : ''}
                            label={data.label}
                            color={'primary'}
                            variant={data.value ? '' : 'outlined'}
                            onClick={handleClick(data)}
                        />
                    );
                })}

            </div>
            <div className="flex-grid">
                {/*Check if null then load workouts*/}
                {workouts && workouts.map(workout => (
                    <WorkoutCard workout={workout}/>
                ))}
            </div>
        </div>

    )
}

function WorkoutCard({workout}) {
    return (
        <div id={workout.id} className="workout-card">
            <h2>{workout.name}</h2>
            <p>Description: {workout.description}</p>
            <p><b>Target: </b> {workout.target}</p>
            <p>Reps: {workout.reps}</p>
        </div>
    )
}

export default Workouts