import React, { useEffect, useState } from 'react'
import { BsListNested } from 'react-icons/bs';
import './codigoFuente.css';
import '../auth/login.css'
import { useForm } from '../../hooks/useForm';
import { Compilacion } from './Compilacion';
import axios from 'axios'
import { useParams } from 'react-router-dom';

export const CodigoFuente = () => {
  const [{estado, codigoEnviado}, setEstado] = useState({estado: 6})

  useEffect(async ()  => {
    
    await getDatosProblema()
  }, [])

  const {codigo_problema_asignado} = useParams()
  
  const [{ output, statusCode, memory, cpuTime }, setCompilacion] = useState({ output: "", statusCode: 1, memory: 0, cpuTime: 0 })
  const [{ clientId, clientSecret, language, versionIndex }, setCompilacionValues] = useState({
    clientId: '26f666fdaefad5ba6b387617d1406c6b',
    clientSecret: '45de124ce070f6f56eb493668bfb3facb994767426f575ece98b0c843bd47350',
    language: 'java',
    versionIndex: '0'
  })

  const [formValues, handleInputChange] = useForm({
    script: "",
  })

  const { script } = formValues;

  const compilar = async (e) => {
    e.preventDefault();

    try {
      let config = {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
        }
      }

      const res = await axios.post('/api/asignaciones/compilar', {script: script,
      lenguaje: language}, config);
      setCompilacion({output: res.data.message.output, statusCode: res.data.message.statusCode , memory: res.data.message.memory, cpuTime: res.data.message.cpuTime})
    } catch (error) {
      //setValidation({ ok: false, msg: "Error al loguearse." })
      console.log("error")
    }

  }

  const getDatosProblema = async () => {
    const res = await axios.get('/api/asignaciones/' + codigo_problema_asignado);
    await setEstado({estado: res.data.message[0].resuelto, codigoEnviado: res.data.message[0].codigo_fuente})
    console.log(res.data.message[0])
    console.log(res.data.message[0].resuelto)
    console.log(estado)
    console.log(codigoEnviado)

  }

  return (
    <div className="row">
      <div className="col-md-6 m-4">
      <h1 className=" form-group m-6"    >Código Fuente {estado}</h1>
      {(estado===1||estado===2)&&<form onSubmit={compilar}>
          <div className="form-group textarea1" cols="600" >
            <textarea
              className="form-control m-6 textarea1"
              id="exampleFormControlTextarea1"
              rows="3"
              name='script'
              value={codigoEnviado}
              disabled={true}
              onChange={handleInputChange}></textarea>
          </div>
        </form>}
        
        {(estado===0)&&<form onSubmit={compilar}>
          <div className="form-group textarea1" cols="600" >
            <textarea
              className="form-control m-6 textarea1"
              id="exampleFormControlTextarea1"
              rows="3"
              name='script'
              value={script}
              onChange={handleInputChange}></textarea>
          </div>
        </form>}
  



      </div>
      <div className="col-md-4 m-4">
        <Compilacion
          output={output}
          statusCode={statusCode}
          memory={memory}
          cpuTime={cpuTime}
          compilar={compilar}
          setCompilacionValues={setCompilacionValues}
          script={script}
          estado={estado}
        ></Compilacion>

      </div>
    </div>
  )
}
