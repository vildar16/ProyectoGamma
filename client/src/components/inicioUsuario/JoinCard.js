import React from 'react'
import {Link} from 'react-router-dom'


export const JoinCard = ({ sesion, getSesiones }) => {

  return (
    <div className="col-md-4 login-form-1 m-1">
        <div>
          <h3>
            {sesion.nombre_sesion}
          </h3>

        </div>

        <br></br>

        <Link
          to={"/problemasAsignados/"+sesion.codigo_sesion}
          className="btnSubmit">
          Ver Sesion

        </Link>
        <br></br>
        <br></br>
        <Link
          to={"/dashboard/"+sesion.codigo_sesion}
          className="btnSubmit">
          Ver Dashboard

        </Link>

    </div>

  )
}
