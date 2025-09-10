import React, { useState } from "react";
import Login from "./Login";
import Inicio from "./Inicio";

function FormularioRegistro() {
  const [tipos, setTipos] = useState("");
  const [registrado, setRegistrado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Datos del registro
    const user = event.target.usuario.value;
    const password = event.target.contraseña.value;
    const passwordV = event.target.contraseñav.value;
    const tipo = event.target.tipos.value;
    const dni = event.target.dni.value;
    const mail = event.target.mail.value;
    const phone = event.target.telefono.value;
    const tos = event.target.tos.checked;

    // Validación de datos (Expresiones regulares)
    if (!user) {
      alert('Ingrese nombre de usuario');
      return;
    }
    if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[@$*]).{10}$/.test(password)) {
      alert(
        "La contraseña debe contener al menos un número, una mayúscula y un carácter especial (@, $, *). Longitud: 10 caracteres."
      );
      return;
    }
    if (password !== passwordV) {
      alert("Las contraseñas no coinciden");
      return;
    }
    if (
      (phone.length !== 7 && phone.length !== 9) ||
      (phone.length === 7 && !/^[2456]/.test(phone)) ||
      (phone.length === 9 && !/^9/.test(phone))
    ) {
      alert(
        "El teléfono debe tener 7 dígitos y comenzar con 2, 4, 5 o 6; si tiene 9 dígitos, debe comenzar con 9."
      );
      return;
    }
    if (
      (tipo === "1" && !/^\d{8}$/.test(dni)) ||
      (tipo === "2" && !/^[\w\d]{12}$/.test(dni))
    ) {
      alert(
        "El DNI debe tener 8 dígitos para el tipo DNI y 12 caracteres alfanuméricos para el tipo CE."
      );
      return;
    }
    if (!/\S+@\S+\.\S+/.test(mail)) {
      alert("Ingrese un correo válido");
      return;
    }
    if (!tos) {
      alert("Debe aceptar los Términos y Condiciones del servicio.");
      return;
    }

    alert("Gracias por registrarse");
    setRegistrado(true);
  };

  return (
    <div className="container">
      {registrado ? (
        <Login />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="iusuario">Usuario</label>
            <input
              type="text"
              className="form-control"
              id="iusuario"
              name="usuario"
              placeholder="Ingrese usuario"
            />
          </div>
          <div className="form-group">
            <label htmlFor="icontraseña">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="icontraseña"
              name="contraseña"
              placeholder="Ingrese contraseña"
            />
          </div>
          <div className="form-group">
            <label htmlFor="icontraseñav">Repita contraseña</label>
            <input
              type="password"
              className="form-control"
              id="icontraseñav"
              name="contraseñav"
              placeholder="Repita contraseña"
            />
          </div>
          <div className="form-group">
            <label htmlFor="itipo">Tipo de documento</label>
            <select
              className="form-control"
              id="itipo"
              name="tipos"
              value={tipos}
              onChange={(e) => setTipos(e.target.value)}
            >
              <option value="1">DNI</option>
              <option value="2">CE</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="idni">DNI</label>
            <input
              type="text"
              className="form-control"
              id="idni"
              name="dni"
              placeholder="Ingrese DNI"
            />
          </div>
          <div className="form-group">
            <label htmlFor="icorreo">Correo</label>
            <input
              type="email"
              className="form-control"
              id="icorreo"
              name="mail"
              placeholder="Ingrese correo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="itelefono">Teléfono</label>
            <input
              type="text"
              className="form-control"
              id="itelefono"
              name="telefono"
              placeholder="Ingrese teléfono (7 a 9 dígitos)"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="itos"
              name="tos"
            />
            <label htmlFor="itos" className="form-check-label">
              Acepto Términos y Condiciones del servicio
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </form>
      )}
    </div>
  );
}

export default FormularioRegistro
