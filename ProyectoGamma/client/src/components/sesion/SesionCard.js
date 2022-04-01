import React from 'react'
import { GrCatalogOption } from 'react-icons/gr';
import {Link} from 'react-router-dom'


export const SesionCard = ({ sesion, getSesiones }) => {


  return (
    <div className="col-md-4 login-form-2 m-1">
        <div>
          <h3>
            {sesion.nombre_sesion}
          </h3>

        </div>
        <div className="d-flex  justify-content-center">
          <GrCatalogOption style={{ color: 'red', fontSize: "5em" }} />
        </div>

        <Link
          to="/categoria"
          className="btnSubmit">
          Ingresar

        </Link>


    </div>

  )
}
