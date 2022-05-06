import React, { useEffect, useState } from 'react'
import { UsuarioCard } from './UsuarioCard'
import './usuario.css'
import { UsuarioPerfil } from './UsuarioPerfil'
import { useParams } from 'react-router-dom'
import axios from 'axios'



export const UsuariosLista = () => {

  const { codigo_sesion } = useParams()

  const [categorias, setCategorias] = useState([])

  const [usuarios, setUsuarios] = useState([])

  const [cargando, setCargando] = useState(true)

  const [{viendo, viendoNombre}, setViendo] = useState({viendo: "", viendoNombre:""})

  const [{ nombre_sesion }, setSesion] = useState({ nombre_sesion: 'Cargando...' })

  const [problemas, setProblemas] = useState([])

  useEffect(() => {

    getUsuarios()

  }, [])

  const usuarios1 = [{ usuario: 'Mauricio Munoz - 2018319153' },
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

  const getUsuarios = async () => {
    console.log(codigo_sesion)
    const sesion = await axios.get('http://localhost:5000/api/sesiones/' + codigo_sesion)
      .then(res => { setSesion({ nombre_sesion: res.data.message[0].nombre_sesion }) })
      .catch(error => { setCategorias([]) })



      const users = await axios.get('http://localhost:5000/api/sesiones/usuarios_x_quest/' + codigo_sesion)
      .then(res => { setUsuarios(res.data.message) })
      .catch(error => { setUsuarios([]) })
      
    setCargando(false);

  }
  
  const getProblemas = async (viendoU) => {
   await console.log('viendo '+viendo +""+ codigo_sesion) 

  
   const probs = await axios.post('http://localhost:5000/api/sesiones/problemas_usuario_sesion', 
    {
     nombre_usuario: viendoU,
     codigo_sesion: codigo_sesion
    }
   )
       .then(res => { setProblemas(res.data.message) })
       .catch(error => { setProblemas([]); console.log("error") })
    
   }
  const [file, setFile] = useState()

  const onFileChange = async (event) => {
    setFile(event.target.files[0])
  }

  const onFileUpload = async (event) => {
    event.preventDefault()

    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
      preservePath: true
    };
    const res = await axios.post('http://localhost:5000/api/sesiones/csv-usuarios/' + codigo_sesion, formData, config)

    console.log(res);

  }

  return (
    <>
      <div className="input-group m-3 col-xs-4 col-sm-4 col-md-4 col-lg-4">
      </div>

      <div className="row">


        <h1 className='m-4'>Jugadores en {nombre_sesion} </h1>

        <div className='m-4'>
                <input type="file" accept='.csv' onChange={onFileChange}/>
                <button onClick={onFileUpload}>
                  Upload!
                </button>
            </div>

        <div className="col-md-5 m-4 div-main div-with-scroll" id='left'>

          <ul className="list-group list-group-flush">
            {
              usuarios.map((usuario) => (

                <UsuarioCard usuario={usuario} setViendo={setViendo} getProblemas = {getProblemas}></UsuarioCard>

              ))


            }

          </ul>
        </div>

        {(!viendo=="")&&<div className="col-md-5 div-main m-4 ">
          <UsuarioPerfil viendo={viendo} viendoNombre={viendoNombre} problemas={problemas}></UsuarioPerfil>


        </div>}
      </div>






    </>
  )
}
