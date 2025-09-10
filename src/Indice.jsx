import React from 'react';
import Cabecera from './Cabecera';
import './App.css';
import Pie from './Pie';

function Indice({ children }) {
  return (
    <div>
      <Cabecera />

      <nav className="nav-bar">
        <a href="/Inicio">Inicio</a>
        <a href="/Destinos">Destinos</a>
        <a href="/PaquetesTuristicos">Paquetes Turísticos</a>
        <a href="/Login">Iniciar Sesion</a>
      </nav>

      <main>{children}</main>

      <Pie />

    </div>
  );
}

export default Indice
