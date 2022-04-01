import React from 'react'
import { FaCircle } from 'react-icons/fa';
import './categoria.css'


export const CategoriaCard = ({categoria, getCategorias}) => {




  return (
    <div className="col-md-4 login-form-2 ">
        <div className="row">
            <div className='col-md-9'>
                <h3>
                {categoria.nombre}
                </h3>
                
            </div>
            <div className='col-md-3 '>
                <FaCircle style={{color: categoria.color, fontSize: "5em" }}/>
            </div>



        </div>
        
                    
    </div>
            
  )
}
