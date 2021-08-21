import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
const Forms = ({ crearCita }) => {
  //Crear cita
  const [cita, ActualizarCitas] = useState({
    mascota: "",
    Propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error_form, ActualizarError] = useState(false);
  //Funcion que actualiza la cita cada vez que el usuario escribe
  const ActualizarState = (e) => {
    ActualizarCitas({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  //Extraer valores
  const { mascota, Propietario, fecha, hora, sintomas } = cita;
  //Cuando el ususario envia la cita
  const submitCita = (e) => {
    e.preventDefault();

    //Validamos
    if (
      mascota.trim() === "" ||
      Propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      ActualizarError(true);
      return;
    }
    //Eliminar Mensaje de error
    ActualizarError(false);
    //Asignar un ID
    cita.id = uuidv4();
    //Creando cita
    crearCita(cita);
    //Reiniciar Forms
    ActualizarCitas({
      mascota: "",
      Propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Citas</h2>
      {error_form ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={ActualizarState}
          value={mascota}
        />
        <label>Propietario</label>
        <input
          type="text"
          name="Propietario"
          className="u-full-width"
          placeholder="Nombre del propietario de la Mascota"
          onChange={ActualizarState}
          value={Propietario}
        />
        <label>Fecha</label>
        <input
          onChange={ActualizarState}
          value={fecha}
          type="date"
          name="fecha"
          className="u-full-width"
        />
        <label>Hora</label>
        <input
          onChange={ActualizarState}
          value={hora}
          type="time"
          name="hora"
          className="u-full-width"
        />
        <label>Sintomas</label>
        <textarea
          onChange={ActualizarState}
          value={sintomas}
          name="sintomas"
          className="u-full-width"
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Forms.propTypes={
  crearCita: PropTypes.func.isRequired
}
export default Forms;
