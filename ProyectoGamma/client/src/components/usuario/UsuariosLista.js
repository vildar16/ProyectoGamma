import React, { useEffect, useState } from 'react'
import { UsuarioCard } from './UsuarioCard'
import './usuario.css'
import { UsuarioPerfil } from './UsuarioPerfil'
import { useParams } from 'react-router-dom'
import axios from 'axios'



export const UsuariosLista = () => {

  

  const { codigo_sesion } = useParams()

  const [categorias, setCategorias] = useState([])

  const [cargando, setCargando] = useState(true)

  const [{ nombre_sesion }, setSesion] = useState({ nombre_sesion: 'Cargando...' })

  useEffect(() => {

    getCategorias()

  }, [])


  const usuarios = [{ usuario: 'Mauricio Munoz - 2018319153' },
  { usuario: 'Mauricio Munoz - 2018319153' },
  { usuario: 'Mauricio Munoz - 2018319153' },
  { usuario: 'Mauricio Munoz - 2018319153' },
  { usuario: 'Mauricio Munoz - 2018319153' },
  { usuario: 'Mauricio Munoz - 2018319153' },
  { usuario: 'Mauricio Munoz - 2018319153' },
  { usuario: 'Mauricio Munoz - 2018319153' },
  { usuario: 'Mauricio Munoz - 2018319153' },
  { usuario: 'Mauricio Munoz - 2018319153' },
  { usuario: 'Mauricio Munoz - 2018319153' },
  { usuario: 'Mauricio Munoz - 2018319153' },
  { usuario: 'Mauricio Munoz - 2018319153' },

  ]

  const getCategorias = async () => {
    console.log(codigo_sesion)
    const sesion = await axios.get('http://localhost:5000/api/sesiones/' + codigo_sesion)
      .then(res => { setSesion({ nombre_sesion: res.data.message[0].nombre_sesion }) })
      .catch(error => { setCategorias([]) })

    setCargando(false);

  }


  return (
    <>
      <div className="input-group m-3 col-xs-4 col-sm-4 col-md-4 col-lg-4">
      </div>

      <div className="row">


        <h1>Jugadores en {nombre_sesion} </h1>
        <div className="col-md-5 m-4 div-main div-with-scroll" id='left'>

          <ul class="list-group list-group-flush">
            {
              usuarios.map((usuario) => (

                <UsuarioCard usuario={usuario}></UsuarioCard>

              ))


            }

          </ul>
        </div>

        <div className="col-md-5 div-main m-4 ">
          <UsuarioPerfil></UsuarioPerfil>


        </div>
      </div>






    </>
  )
}
