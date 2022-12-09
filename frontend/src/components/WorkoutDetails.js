import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = (props) => {
    const { dispatch } = useWorkoutsContext();

    const handleClick = async () => {
        const response = await fetch('http://localhost:4000/api/workouts/' + props.workout._id, {
            method: 'DELETE'
        });
        const data = await response.json();
        if(response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: data});
        }
    }

    return (
        <div className="workout-details">
            <h4>{props.workout.title}</h4>
            <p><strong>Load (kg): </strong> {props.workout.load}</p>
            <p><strong>Reps: </strong> {props.workout.reps}</p>
            <p>{formatDistanceToNow(new Date(props.workout.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails;