import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { ProblemasLista } from '../problemas/ProblemasLista'

export const ProblemasAsignados = () => {

  const [problemas, setProblemas] = useState([])
  const { usuario } = useContext(AuthContext)
  const { codigo_sesion } = useParams()



  useEffect(() => {
    getProblemas()
    console.log(usuario.nombre_usuario)
  }, [])


  const getProblemas = async () => {


    const probs = await axios.post('/api/sesiones/problemas_usuario_sesion',
      {
        nombre_usuario: usuario.nombre_usuario,
        codigo_sesion: codigo_sesion
      }
    )
      .then(res => { setProblemas(res.data.message) })
      .catch(error => { setProblemas([]); console.log("error") })
      console.log(problemas)
      
  }


  return (
    <div className='row'>
      <h1>Mis Problemas</h1>
      <div className="col-md-1 "></div>

      <div className="col-md-10 ">
        <ProblemasLista problemasLista={problemas} codigo_sesion={codigo_sesion}></ProblemasLista>
      </div>


      <div className="col-md-1 "></div>



    </div>
  )
}
