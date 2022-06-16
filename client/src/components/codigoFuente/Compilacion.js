import React from 'react'

export const Compilacion = ({ output, statusCode, memory, cpuTime }) => {


  const lenguajes = [{nombre: 'java'}, {nombre: 'python3'}, {nombre: 'c++'}]

  return (
    <div>
      <h3>Output: {output}</h3>
      <h3>Memoria: {memory}</h3>
      <h3>Tiempo de CPU: {cpuTime}</h3>








      <div className="btn-group">
      
        <div className="form-group">
          <h3>Elegir lenguaje:</h3>
          <select className="form-control"
            name="zonaSeleccionada"
            >
            {
              lenguajes.map(lenguaje =>
                <option  key={lenguaje.nombre} value={lenguaje.nombre}>
                  {lenguaje.nombre}
                </option>)
            }

          </select>
        </div>
      </div>
    </div>
  )
}
