import React from 'react'
import { FaCircle } from 'react-icons/fa';
import './categoria.css'
import { Globo } from '../puntaje/Globo';
import { Moneda } from '../puntaje/Moneda';


export const CategoriaCard = ({categoria, getCategorias}) => {




  return (
    <div className="col-sm-4 login-form-1 m-1" style={{height:'30vh', width:'50vh'}}>
        
            <div>
                <h3>
                {categoria.nombre}
                </h3>
                
            </div>
            <div className="d-flex  justify-content-center" style={{height:'15vh'}}>

                
                <Moneda color={categoria.color}></Moneda>
                
                
            </div>



        </div>
        

            
  )
}
