import React, { useEffect, useState } from 'react'
import ColorPickerComponent from '../color-picker/ColorPickerComponent'
import { CategoriaCard } from './CategoriaCard'
import { CategoriaForm } from './CategoriaForm'
import axios from 'axios';

export const Categoria = () => {

  const [categorias, setCategorias] = useState([])

  const getCategorias = () => {

    axios.get('http://localhost:5000/api/categorias/')
      .then(res => { setCategorias(res.data.message) })
      .catch(error => { setCategorias([]) })

  }


  useEffect(() => {

    getCategorias()

  }, [])



  return (
    <>
      <div className="input-group m-3 col-xs-4 col-sm-4 col-md-4 col-lg-4">

        <h1>Nombre de Sesión</h1>
      </div>

      <div className="row">

        <div className="col-md-4 m-4 div-main div-with-scroll" >
          <h1>Crear Categoría</h1>
          <CategoriaForm getCategorias={getCategorias}></CategoriaForm>

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
            </div>
          </ul>


        </div>
      </div>






    </>

  )
}
