import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function CreateExercise(props) {


    const [newExercise, setNewExercise] = useState({
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users : [],
    });

    useEffect(()=>{
        axios.get('http://localhost:5000/users/')
            .then(response => {
                // console.log(response.data);
                if (response.data.length > 0) {
                    setNewExercise((prevExercise) =>{
                        return{
                            ...prevExercise,
                            users: response.data.map(user => user.username),
                            // username: response.data[0].username
                        }

                    })
                }
            })
    })
    const userInput = React.createRef();

    function handleChange(e){
        const {name, value} = e.target;

        setNewExercise((prevExercise) => {
            return {
                ...prevExercise,
                [name]: value,
            }
        });
    }
    function handleDateChange(date) {
        setNewExercise((prevExercise) => {
            return {
                ...prevExercise,
                date: date,
            }
        })
    }    

    function onSubmit(e){ 
        e.preventDefault();
        console.log(newExercise);
        axios.post('http://localhost:5000/exercises/add', newExercise)
            .then(res => console.log(res.data));
        window.location = '/';
        
    }
    return (
        <div>
            <h3>Create New Exercise</h3>
            <div className='container card'>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor='userslist' className="form-label">Username: </label>
                        <select ref={userInput} required className='form-control' value={newExercise.username} onChange={handleChange} name="username" id='userslist'>
                            {newExercise.users.map(user => {return(<option key={user} value={user}>{user}</option>)})}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='descriptionInput' className="form-label">Description: </label>
                        <input type="text" className='form-control' required value={newExercise.description} onChange={handleChange} name="description" id='descriptionInput' /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor='durationInput' className="form-label">Duration (in minutes): </label>
                        <input type="text" className='form-control' required value={newExercise.duration} onChange={handleChange} name="duration" id='durationInput' /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor='dateInput' className="form-label">Date: </label>
                        <DatePicker selected={newExercise.date} onChange={handleDateChange} name="date" id='dateInput' /> 
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="btn btn-primary" value="Create Exercise" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateExercise;