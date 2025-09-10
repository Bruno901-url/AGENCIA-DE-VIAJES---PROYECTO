import React from "react";
import ImagenesTours from "./ImagenesTours";

function Destinos() {
    return (
        <section className="divseccion">
            {ImagenesTours.map((tour, index) => (
                <div key={index} className="imagen-con-texto">
                    <img className="imgseccion" src={tour.imagen} />
                    <div className="contenido-texto">
                        <h3 className="titulo-imagen">Tour {tour.titulo}</h3>
                        <p className="texto-imagen">{tour.texto}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Destinos

