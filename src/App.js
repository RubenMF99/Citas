import React, { Fragment, useState, useEffect } from "react";
import Forms from "./Componentes/Formulario";
import Mostrar_Cita from "./Componentes/Mostrar_Cita";
function App() {
  //Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('Citas'));
  if(!citasIniciales ){
    citasIniciales = [];
  }
  //Arreglo Citas
  const [citas_Guardadas, guardarCitas] = useState(citasIniciales);
  //Use Effect para realizar operaciones cuando cambie el state
  useEffect(() => {
    if(citasIniciales ){
     localStorage.setItem('Citas',JSON.stringify(citas_Guardadas));
    }else{
      localStorage.setItem('Citas',JSON.stringify([]));
    }
  }, [citas_Guardadas,citasIniciales]);

  //funcion que tome las citas y las agregue al arreglo
  const crearCita = (cita) => {
    guardarCitas([...citas_Guardadas, cita]);
  };
  // Funcion que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevascitas = citas_Guardadas.filter((cita_el) => cita_el.id !== id);
    guardarCitas(nuevascitas);
  };
  //Mensaje condicional
  const titulo =
    citas_Guardadas.length === 0 ? `No hay Citas` : `Administra tus Citas`;
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Forms crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas_Guardadas.map((M_cita) => (
              <Mostrar_Cita
                key={M_cita.id}
                M_cita={M_cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
