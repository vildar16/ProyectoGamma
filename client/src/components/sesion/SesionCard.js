import React from 'react'
import { GrCatalogOption, BsPeople } from 'react-icons/bs';
import { Link } from 'react-router-dom'


export const SesionCard = ({ sesion, getSesiones }) => {


  return (
    <div className="col-md-4 login-form-1 m-1">

      <center>
        <Link
          to={"/categoria/" + sesion.codigo_sesion}
          style={{textDecoration: "none"}}
          className="btnSubmit m-3">
          Categorías

        </Link>
        <Link
          to={"/usuarios/" + sesion.codigo_sesion}
          style={{textDecoration: "none"}}
          className="btnSubmit m-3">
          Jugadores

        </Link>

      </center>
      <div className='mt-4'>
        <h3>
          {sesion.nombre_sesion}
        </h3>

      </div>
      <div>
        <center>
          <h5>
            código: {sesion.codigo_sesion}
          </h5>

        </center>

      </div>
      <div className="d-flex  justify-content-center">
        <BsPeople style={{ color: 'red', fontSize: "5em" }} />
      </div>



    </div>

  )
}
