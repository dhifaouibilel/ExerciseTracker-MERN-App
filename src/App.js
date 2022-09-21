import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Navbar from './components/Navbar';
import EditExercise from './components/EditExercise';
import ExercisesList from './components/ExercisesList';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="container">
        <Routes>
        <Route path='/' element={<ExercisesList />} />
        <Route path='/edit/:id' element={<EditExercise />} />
        <Route path='/create' element={<CreateExercise />} />
        <Route path='/user' element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
