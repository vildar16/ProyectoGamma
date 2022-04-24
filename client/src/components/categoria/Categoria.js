import React, { useEffect, useState } from 'react'
import ColorPickerComponent from '../color-picker/ColorPickerComponent'
import { CategoriaCard } from './CategoriaCard'
import { CategoriaForm } from './CategoriaForm'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Moneda } from '../puntaje/Moneda';
import { Loading } from '../ui/Loading';

export const Categoria = () => {

  const {codigo_sesion} = useParams()

  const [categorias, setCategorias] = useState([])

  const [{nombre_sesion}, setSesion] = useState({nombre_sesion: 'Cargando sesión...'})

  const [creando, setCreando] = useState(false);

  const getCategorias = async () => {
   console.log(codigo_sesion)
    const sesion = await axios.get('http://localhost:5000/api/sesiones/' + codigo_sesion)
      .then(res => { setSesion({nombre_sesion: res.data.message[0].nombre_sesion}) })
      .catch(error => { setCategorias([]) })


    await axios.get('http://localhost:5000/api/sesiones/categorias_x_sesion/'+codigo_sesion)
      .then(res => { setCategorias(res.data.message) })
      .catch(error => { setCategorias([]) })

  }


  useEffect(() => {

    getCategorias()

  }, [])



  return (
    <>
      <div className="input-group m-3 col-xs-4 col-sm-4 col-md-4 col-lg-4">

        <h1>{nombre_sesion}</h1>
      </div>

      <div className="row">

        <div className="col-md-4 m-4 div-main div-with-scroll" >
          <h1>Crear Categoría</h1>
          <CategoriaForm getCategorias={getCategorias} sesion={codigo_sesion} setCreando={setCreando}></CategoriaForm>

        </div>

        <div className="col-md-7 div-main m-4">
          <h1>Categorías</h1>



          <ul className='list-group list-group-flush'>
            <div className="row">
              {
                categorias.map((categoria) => (
                  <CategoriaCard
                    categoria={categoria}
                    getCategorias={getCategorias}
                    key={categoria.id_categoria}
                  />
                ))


              }


              {
                (creando)&&<div className="col-sm-4 login-form-1 m-1" style={{height:'30vh', width:'50vh'}}>
        
                <div>
                    <h3>
                    Creando...
                    </h3>
                    
                </div>
                <div className="d-flex  justify-content-center" style={{height:'15vh'}}>
    
                    
                    <Loading></Loading>
                    
                    
                </div>
    
    
    
            </div>




              }

            </div>
          </ul>


        </div>
      </div>






    </>

  )
}
