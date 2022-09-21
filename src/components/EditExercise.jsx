import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function EditExercise(props) {

    const { id } = useParams();
    // const {id} = props.match.params;

    const [editExercise, setEditExercise] = useState({
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users : [],
    });

    useEffect(()=>{
    
        axios.get(`http://localhost:5000/exercises/${id}`)
            .then((response)=>{
                setEditExercise({
                    username : response.data.username,
                    description : response.data.description,
                    duration : response.data.duration,
                    date : new Date(response.data.date),
                    users : []
                })
            })
            .catch(error => console.log(error));
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    setEditExercise((prevExercise) =>{
                        return{
                            ...prevExercise,
                            users: response.data.map(user => user.username),
                        }

                    })
                }
            })
    },[])
    const userInput = React.createRef();

    function handleChange(e){
        const {name, value} = e.target;

        setEditExercise((prevExercise) => {
            return {
                ...prevExercise,
                [name]: value,
            }
        });
    }
    function handleDateChange(date) {
        setEditExercise((prevExercise) => {
            return {
                ...prevExercise,
                date: date,
            }
        })
    }    

    function onSubmit(e){ 
        e.preventDefault();
        console.log(editExercise);
        axios.post('http://localhost:5000/exercises/update/'+id, editExercise)
            .then(res => console.log(res.data));
        window.location = '/';
        
    }
    return (
        <div>
            <h3>Edit Exercise</h3>
            <div className='container card'>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor='userslist' className="form-label">Username: </label>
                        <select ref={userInput} required className='form-control' value={editExercise.username} onChange={handleChange} name="username" id='userslist'>
                            {editExercise.users.map(user => {return(<option key={user} value={user}>{user}</option>)})}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='descriptionInput' className="form-label">Description: </label>
                        <input type="text" className='form-control' required value={editExercise.description} onChange={handleChange} name="description" id='descriptionInput' /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor='durationInput' className="form-label">Duration (in minutes): </label>
                        <input type="text" className='form-control' required value={editExercise.duration} onChange={handleChange} name="duration" id='durationInput' /> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor='dateInput' className="form-label">Date: </label>
                        <DatePicker selected={editExercise.date} onChange={handleDateChange} name="date" id='dateInput' /> 
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="btn btn-primary" value="Update Exercise" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditExercise;