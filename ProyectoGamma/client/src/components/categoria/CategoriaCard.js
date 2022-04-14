import React from 'react'
import { FaCircle } from 'react-icons/fa';
import './categoria.css'
import { Globo } from './Globo';
import { Moneda } from './Moneda';


export const CategoriaCard = ({categoria, getCategorias}) => {




  return (
    <div className="col-sm-4 login-form-1 m-1">
        
            <div>
                <h3>
                {categoria.nombre}
                </h3>
                
            </div>
            <div className="d-flex  justify-content-center">

                
                <Globo color={categoria.color}></Globo>
                
                
            </div>



        </div>
        

            
  )
}
