import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Exercise(props){
    return(
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0, 10)}</td>
            <td>
            <Link style={{textDecoration: 'none', color:"purple"}} to={'/edit/'+props.exercise._id}><Button variant="outlined" color="secondary" style={{marginRight: "1rem"}} startIcon={<EditIcon />}> Edit</Button></Link> 

            <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={()=>{props.delete(props.exercise._id)}}> Delete </Button>


            </td>
        </tr>
    )
}

export default Exercise;