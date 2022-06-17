import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import axios from 'axios'

export const Compilacion = ({ output, statusCode, memory, cpuTime, compilar, setCompilacionValues, script, estado }) => {


  const [{ok, message}, setError] = useState({ok: false, message:''})
  const [{okSucces, messageSucces}, setSucces] = useState({ok: false, message:''})

  const lenguajes = [{ nombre: 'java', code: 'java' }, { nombre: 'python', code: 'python3' }, { nombre: 'c++', code: 'cpp' }]
  const [lenguajeElegido, setLenguajeElegido] = useState({ lenguajeElegido: "java" })
  const {codigo_problema_asignado} = useParams()


  const subirCodigo = async(e)=>{

    try{

      const res = await axios.put('/api/asignaciones/solucion/',
      {
        id_problema_asignado: codigo_problema_asignado,
        codigo_fuente: script,
        analisis: '0'
      });
      setSucces({okSucces: true, messageSucces: 'Respuesta enviada.'})
      console.log(res)
    }catch(e){
      setError({ok: true, message: 'Error al enviar.'})
    }



  }


  const changeLanguage = async (e) => {
    await setLenguajeElegido({ lenguajeElegido: e.target.value })
    await setCompilacionValues({ language: e.target.value })
    console.log(lenguajeElegido)

    //setCompilacionValues({... languaje})

  }

  return (
    <div>
      <h3>Output:</h3>
      <h4>  {output}</h4>

      <hr></hr>

      <h3>Memoria:</h3>
      
      <h4>{(memory) ? memory +' kilobyte(s)' : 'Error'} </h4>
    <hr></hr>
      <h3>Tiempo de CPU:</h3>
      <h4>
          {(cpuTime) ? cpuTime + ' seg(s)' : 'Error'}
        </h4>
      <hr></hr>
      <div className="btn-group">

        <div className="form-group">
          <h3>Elegir lenguaje:</h3>
          <select className="form-control"
            name="zonaSeleccionada"
            onChange={changeLanguage}
          >
            {
              lenguajes.map(lenguaje =>
                <option key={lenguaje.nombre} value={lenguaje.code}>
                  {lenguaje.nombre}
                </option>)
            }

          </select>
          <button type="button" className="btn btn-success" onClick={compilar}>Ejecutar</button>
          <hr></hr>

          {(estado===1)&&<h4>Esperando revisión...</h4>}
          {(estado===3)&&<h4>Es necesaria una corrección</h4>}
          {(estado===0||estado===3)&&<button type="button" className="btn btn-success"  onClick={subirCodigo}>Subir Código</button>}
          {(estado===2)&&<h4>¡Problema solucionado!</h4>}
          
          
        </div>
        
      </div>
      {(okSucces)&&   <div className="alert alert-success">{messageSucces}</div>}
        {(ok)&&   <div className="alert alert-danger">{message}</div>}
    </div>
  )
}
