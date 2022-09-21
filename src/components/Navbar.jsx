import React from 'react';
import { Link } from 'react-router-dom';
import DirectionsRunRoundedIcon from '@mui/icons-material/DirectionsRunRounded';

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container-fluid">
                <Link to='/' className='navbar-brand ms-5'> <DirectionsRunRoundedIcon /> ExerTracker</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end me-5 p-2' id="navbarNav">
                    <ul className='navbar-nav ms-auto'>
                        <li className='navbar-item'>
                            <Link to='/' className='nav-link'>Exercises</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/create' className='nav-link'>Create Exercise</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/user' className='nav-link'>Create User</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;