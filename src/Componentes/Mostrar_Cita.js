import React from 'react';
import PropTypes from 'prop-types';

const Mostrar_Citas = ({M_cita,eliminarCita}) => (
<div className="cita">
<p>Mascota: <span>{M_cita.mascota}</span></p>
<p>Propietario: <span>{M_cita.Propietario}</span></p>
<p>Fecha: <span>{M_cita.fecha}</span></p>
<p>Hora: <span>{M_cita.hora}</span></p>
<p>Sintomas: <span>{M_cita.sintomas}</span></p>
<button className="button eliminar u-full-width"
onClick={() => eliminarCita(M_cita.id)}
>Eliminar &times;</button>
</div>
)
   
Mostrar_Citas.propTypes = {
    M_cita:PropTypes.object.isRequired,
    eliminarCita:PropTypes.func.isRequired
}
export default Mostrar_Citas;