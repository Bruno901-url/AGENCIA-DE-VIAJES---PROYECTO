import React from 'react';
import { Link } from "react-router-dom"; 
import Face from './face.jpg';
import Insta from './instagram.jpg';
import Twit from './twitter.jpg';
import Libro from './libro.jpg';

function Pie() {
    return (
        <footer className="piepag">
            <div className="contenedor">
                <div className="fila">
                    <div className="col">
                        <h3>Contacto</h3>
                        <p>Teléfono: +51 987 654 321</p>
                        <p>Email: peruinroute@gmail.com</p>
                    </div>
                    <div className="col">
                        <h3>Redes Sociales</h3>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={Face} alt="Facebook" />Facebook
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={Insta} alt="Instagram" />Instagram
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={Twit} alt="Twitter" />Twitter
                        </a>
                    </div>
                    <div className="col">
                        <h3>Enlaces de Interés</h3>
                        <a href="#">
                            <img src={Libro} alt="Libro de Reclamaciones" />
                            Libro de Reclamaciones
                        </a>
                        <a href="#">Política de Privacidad </a>

                        <a href="#">Términos y Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Pie