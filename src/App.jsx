import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Inicio from './Inicio';
import Destinos from './Destinos';
import Indice from './Indice';
import PaquetesTuristicos from './PaquetesTuristicos';

function App() {
  return (
    <Router>
      <Indice>
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Destinos" element={<Destinos />} />
          <Route path="/PaquetesTuristicos" element={<PaquetesTuristicos />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Indice>
    </Router>
  );
}

export default App
