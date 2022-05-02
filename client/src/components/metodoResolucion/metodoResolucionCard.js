import React from 'react'
import { GrCatalogOption, BsPeople } from 'react-icons/bs';
import { Link } from 'react-router-dom'


export const MetodoCard = ({ metodo, getMetodos }) => {


  return (
    <div className="col-md-4 login-form-1 m-1">

      <div className='mt-4'>
        <h3>
          {metodo.nombre_metodo_resolucion}
        </h3>

      </div>

      <div className="d-flex  justify-content-center">
        <BsPeople style={{ color: 'red', fontSize: "5em" }} />
      </div>



    </div>

  )
}
