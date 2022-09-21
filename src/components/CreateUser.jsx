import React, {useState} from 'react';
import axios from 'axios';

function CreateUser(props){
    const [userName, setUserName] = useState("");

    function handleChange(e){
        setUserName(e.target.value);
    }

    function onSubmit(e){
 
        e.preventDefault();
        const user = {username: userName};
        console.log(user);
        axios.post('http://localhost:5000/users/add', user).then(res => console.log(res.data));
        setUserName("");
    }
    return (
        <div className="mb-3">
            <h3>Create New User</h3>
            <div className="container card">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="usenameInput" className="form-label">Username: </label>
                        <input type="text" className="form-control" required value={userName} onChange={handleChange} name="username" id="usenameInput" />
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="btn btn-primary" value="Create User" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;