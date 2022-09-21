import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Exercise from './Exercise';

function ExercisesList(props) {
    const [exercices, setExercises] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
            .then((response) => setExercises(response.data))
            .catch((error) => console.log(error));
    })

    function deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/' + id)
            .then((response) => console.log(response.data))
        setExercises((prevExercises) => {prevExercises.filter((exercise) => exercise._id !== id)})
        window.location = '/';
    }

    return (
    <div>
        <h3>Logged Exercises</h3>
        <div className='container card'>
            <table className='table table-hover'>
                <thead className='thead-light'>
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='card-text'>
                    {exercices.map((ex) =>{
                        return <Exercise exercise={ex} delete={deleteExercise} key={ex._id} />;
                    })}
                </tbody>
            </table>
        </div>
    </div>)
}

export default ExercisesList;