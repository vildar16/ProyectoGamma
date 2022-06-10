import React, { useState } from 'react'
import { BsListNested } from 'react-icons/bs';
import './codigoFuente.css';
import '../auth/login.css'
import { useForm } from '../../hooks/useForm';
import { Compilacion } from './Compilacion';
import axios from 'axios'

export const CodigoFuente = () => {

  const [{ output, statusCode, memory, cpuTime }, setCompilacion] = useState({ output: "", statusCode: 1, memory: 0, cpuTime: 0 })
  const [{ clientId, clientSecret, language, versionIndex }, setCompilacionValues] = useState({
    clientId: '26f666fdaefad5ba6b387617d1406c6b',
    clientSecret: '45de124ce070f6f56eb493668bfb3facb994767426f575ece98b0c843bd47350',
    language: 'c',
    versionIndex: '0'
  })

  const [formValues, handleInputChange] = useForm({
    script: "",
  })

  const {script} = formValues;

  const compilar = async (e) => {
    e.preventDefault();
    console.log("asdasdasd")


    const body = {
      script: script,
      language: language,
    }




    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          }
        }

      const res = await axios.post('http://localhost:5000/api/asignaciones/compilar', body, config);
      console.log(res)

    } catch (error) {
      //setValidation({ ok: false, msg: "Error al loguearse." })
    }

  }



  return (
    <div className="row">
      <div className="col-md-6 m-4">


        <h1 className=" form-group m-6"    >Código Fuente</h1>
        <form onSubmit={compilar}>
          <div className="form-group textarea1" cols="600" >
            <textarea 
              className="form-control m-6 textarea1" 
              id="exampleFormControlTextarea1" 
              rows="3" 
              name='script'
              value={script} 
              onChange={handleInputChange}></textarea>
          </div>
        </form>
        <button type="button" className="btn btn-success" onClick={compilar}>Subir Código</button>






      </div>
      <div className="col-md-4 m-4">
        <Compilacion
          output={output}
          statusCode={statusCode}
          memory={memory}
          cpuTime={cpuTime}
        ></Compilacion>

      </div>
    </div>
  )
}
