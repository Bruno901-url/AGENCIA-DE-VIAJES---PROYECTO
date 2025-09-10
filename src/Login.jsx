import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import FormularioRegistro from "./FormularioRegistro";

const users = [
    { nombreUsuario: 'usuario1', contrasena: 'contrasena1' },
    { nombreUsuario: 'usuario2', contrasena: 'contrasena2' },
    { nombreUsuario: 'usuario3', contrasena: 'contrasena3' },
    { nombreUsuario: 'usuario4', contrasena: 'contrasena4' },
    { nombreUsuario: 'usuario5', contrasena: 'contrasena5' }
]

let intento = 0

const Login = () => {
    const [nombreUsuario, setNombreUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [mostrarRegistro, setMostrarRegistro] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        const usuarioEncontrado = users.find(
            (usuario) => usuario.nombreUsuario === nombreUsuario && usuario.contrasena === contrasena
        )

        if (usuarioEncontrado) {
            alert(`Bienvenido ${usuarioEncontrado.nombreUsuario}`);
            navigate("/inicio");

        } else {
            intento++
            if (intento < 2) {
                alert('Usuario y/o contrasena incorrectos')
            } else {
                alert('Credenciales incorrectas, por favor llene el formulario de registro')
                setMostrarRegistro(true)
            }
        }

    }

    return (
        <div className="containerLogin">
            {!mostrarRegistro ? (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="iusuario">Nombre de Usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            id="iusuario"
                            name="nombreusuario"
                            placeholder="Ingrese nombre de usuario"
                            value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ipassword">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="ipassword"
                            name="contraseña"
                            placeholder="Ingrese Contraseña"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Iniciar Sesion
                    </button>
                </form>
            ) : (
                <FormularioRegistro />)}
        </div>
    )

}

export default Login