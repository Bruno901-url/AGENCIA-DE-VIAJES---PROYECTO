import React, { Component } from "react";
import { Link } from "react-router-dom";
import FechaHora from './FechaHora';

const Carrusel = ["/img/banner.jpg", "/img/banner1.jpg", "/img/banner2.jpg"]

class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            c: 0
        }
    }
    render() {
        setTimeout(() => this.setState({
            c: Math.floor(Math.random() * Carrusel.length)
        }), 3000)
        return (
            <div>
                <h1 className="h1cab">PERU IN ROUTE</h1>
                <img className="imgcab" src={Carrusel[this.state.c]} alt="cabecera" />
            </div>
        )
    }
}

function Cabecera() {
    return (
        <div className="bloque">
            <Banner />
            <FechaHora />
        </div>
    );
}

export default Cabecera
