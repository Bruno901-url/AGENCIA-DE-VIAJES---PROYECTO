import React, { useState } from "react";

const PaquetesData = [
    {
        region: "Norte",
        destinos: [
            { nombre: "Callahuanca", descripcion: "Fortaleza Inca en Lima", precio: 250, duracion: 2 },
            { nombre: "Canta", descripcion: "Paisajes y ruinas antiguas", precio: 300, duracion: 3 },
            { nombre: "Churín", descripcion: "Deportes extremos y aguas termales", precio: 400, duracion: 4 },
            { nombre: "Rupac", descripcion: "Ciudadela preinca", precio: 350, duracion: 2 },
        ],
    },
    {
        region: "Centro",
        destinos: [
            { nombre: "San Jerónimo de Surco", descripcion: "Historia y cultura del distrito", precio: 200, duracion: 1 },
            { nombre: "Marcahuasi", descripcion: "Complejo arqueológico misterioso", precio: 400, duracion: 2 },
            { nombre: "Matucana", descripcion: "Caminatas y naturaleza", precio: 250, duracion: 1 },
        ],
    },
    {
        region: "Sur",
        destinos: [
            { nombre: "Ica", descripcion: "Aventura en las dunas y Líneas de Nazca", precio: 500, duracion: 3 },
            { nombre: "Lunahuaná", descripcion: "Viñedos y vinos locales", precio: 300, duracion: 2 },
        ],
    },

];

function PaquetesTuristicos() {
    const [seleccionados, setSeleccionados] = useState([]);

    const manejarSeleccion = (destino) => {
        if (seleccionados.some((d) => d.nombre === destino.nombre)) {
            setSeleccionados(seleccionados.filter((d) => d.nombre !== destino.nombre));
        } else {
            setSeleccionados([...seleccionados, destino]);
        }
    };

    const totalDias = seleccionados.reduce((acc, destino) => acc + destino.duracion, 0);
    const totalSoles = seleccionados.reduce((acc, destino) => acc + destino.precio, 0);

    return (
        <div className="paquetes-container">
            <div className="resumen-seleccionados">
                <h2>Resumen de Selección</h2>
                <p>Total de Días: {totalDias}</p>
                <p>Total en Soles: S/. {totalSoles}</p>
                <button className="btn-comprar">Comprar</button>
            </div>
            {PaquetesData.map((region) => (
                <section key={region.region} className="region-section">
                    <h3 className="region-title">{region.region}</h3>
                    <div className="destinos-grid">
                        {region.destinos.map((destino) => (
                            <div
                                key={destino.nombre}
                                className={`paquete-card ${seleccionados.some((d) => d.nombre === destino.nombre) ? "seleccionado" : ""
                                    }`}
                                onClick={() => manejarSeleccion(destino)}
                            >
                                <h4 className="paquete-title">{destino.nombre}</h4>
                                <p className="paquete-description">{destino.descripcion}</p>
                                <p className="paquete-price">S/. {destino.precio}</p>
                                <p className="paquete-duration">{destino.duracion} días</p>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default PaquetesTuristicos
