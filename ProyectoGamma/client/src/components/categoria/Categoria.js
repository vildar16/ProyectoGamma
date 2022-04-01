import React, { useState } from 'react'
import ColorPickerComponent from '../color-picker/ColorPickerComponent'
import { CategoriaCard } from './CategoriaCard'
import { CategoriaForm } from './CategoriaForm'

export const Categoria = () => {



  return (
    <>
            <div className="input-group m-3 col-xs-4 col-sm-4 col-md-4 col-lg-4">

            <h1>Nombre de Sesión</h1>
            </div>

            <div className="row">

                <div className="col-5 m-4 div-main div-with-scroll" >
                    <h1>Crear Categoría</h1>
                    <CategoriaForm></CategoriaForm>
                    
                </div>

                <div className="col div-main m-4">
                  <h1>Categorías</h1>
                  <CategoriaCard></CategoriaCard>

                </div>
            </div>


            
            
            
            
        </>
    
  )
}
