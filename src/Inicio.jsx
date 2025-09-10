import { Link } from "react-router-dom";
import React, { Component } from "react";
import ImagenesTours from "./ImagenesTours";
import ImgInicio from './inicio.jpg';

class Inicio extends Component {
    state = {
        imgs: null
    };

    constructor(props) {
        super(props);

        this.state = {
            imgs: ImagenesTours.map((x) => (
                <article className="art-destinos" key={x.imagen}>
                    <img className="img-destinos" src={x.imagen} alt="Destino turístico" />
                    <h3 className="h3cab">{x.desc}</h3>
                </article>
            ))
        };
    }

    render() {
        return (
            <div className="inicio-container">
                <section className="intro-section">
                    <img
                        className="intro-image"
                        src={ImgInicio} alt="Paisaje de Perú"
                    />
                    <div className="intro-text">
                        <h1>Bienvenido a Peru in Route</h1>
                        <p>
                            Somos una empresa dedicada a mostrarte la riqueza y belleza de los destinos turísticos de Perú. Desde
                            majestuosos paisajes hasta experiencias culturales únicas, nuestro objetivo es brindarte momentos inolvidables.
                        </p>
                        <p>
                            Descubre todo lo que Perú tiene para ofrecer: sus impresionantes montañas, cálidas playas, y una historia
                            que se siente en cada rincón del país. ¡Explora con nosotros!
                        </p>
                    </div>
                </section>

                <h1 className="galeria-title">Galería de Imágenes</h1>
                <div className="galeria-destinos">
                    {this.state.imgs}
                </div>
            </div>
        );
    }
}

export default Inicio
