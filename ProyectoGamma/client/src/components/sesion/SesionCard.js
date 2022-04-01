import React from 'react'
import { GrCatalogOption, BsPeople } from 'react-icons/bs';
import {Link} from 'react-router-dom'


export const SesionCard = ({ sesion, getSesiones }) => {


  return (
    <div className="col-md-4 login-form-1 m-1">
        <div>
          <h3>
            {sesion.nombre_sesion}
          </h3>

        </div>
        <div className="d-flex  justify-content-center">
          <BsPeople style={{ color: 'red', fontSize: "5em" }} />
        </div>
    <center>
        <Link
          to={"/categoria/"+sesion.codigo_sesion}
          className="btnSubmit">
          Ver categorias

        </Link>

    </center>


    </div>

  )
}
