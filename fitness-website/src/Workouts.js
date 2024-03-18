import {useEffect, useState} from "react";

function Workouts() {
    const [workouts, setWorkouts] = useState(null)

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

    return (

        <div className>
            <h1>Workouts</h1>
            <div className="flex-grid">
                {/*Check if null then load workouts*/}
                {workouts && workouts.map(workout => (
                    <WorkoutCard workout={workout}/>
                ))}
            </div>
        </div>

    )
}

function WorkoutCard( {workout} ) {
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