import React, { useEffect, useState, useContext } from 'react'
import { JoinCard } from './inicioUsuario/JoinCard'
import { JoinForm } from './inicioUsuario/JoinForm'
import { AuthContext } from '../auth/authContext'
import axios from 'axios';

export default function Placeholder() {
  
  const { usuario } = useContext(AuthContext)

  const [sesiones, setSesiones] = useState([])

  const [setSesion] = useState({nombre_usuario: 'Cargando usuario...'})

  const getSesionesUsuario = async () => {
    console.log(usuario.nombre_usuario)
    const sesion = await axios.get('http://localhost:5000/api/usuarios/sesiones_x_usuario/'+usuario.nombre_usuario)
      .then(res => { setSesiones(res.data.message) })
      .catch(error => { setSesiones([]) })
    
  }

  useEffect(() => {

    getSesionesUsuario()

  }, [])

  return (
    <>
      <div className="input-group m-3 col-xs-4 col-sm-4 col-md-4 col-lg-4">

        <h1>{usuario.nombre_usuario}</h1>
      </div>

      <div className="row">

        <div className="col-md-4 m-4 div-main div-with-scroll" >
          <h1>Ingresar a una sesión</h1>
          <JoinForm getSesionesUsuario={getSesionesUsuario} nombre_usuario={usuario.nombre_usuario}></JoinForm>

        </div>

        <div className="col-md-7 div-main m-4">
          <h1>Mis Sesiones</h1>



          <ul className='list-group list-group-flush'>
            <div className="row">
              {
                sesiones.map((sesion) => (
                  <JoinCard
                    sesion={sesion}
                    getSesionesUsuario={getSesionesUsuario}
                    key={sesion.codigo_sesion}
                  />
                ))


              }
            </div>
          </ul>


        </div>
      </div>

    </>

  )
}
