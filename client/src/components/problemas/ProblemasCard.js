import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'

export const ProblemasCard = ({nombre, link, categoria = '', id_problema_asignado = '', asignado = false}) => {


  const { usuario, dispatch } = useContext(AuthContext)
  



  return (<>
    <div>

      <li className="list-group-item rounded login-form-2 m-1">

        <div className='row'>
          <div className="col-md-4 d-flex justify-content-start" >
            <h3>
              {nombre}
            </h3>

           
          </div>

          {(usuario.id_tipo_usuario == 2 && id_problema_asignado != '')&&
          <div className="col-md-4" >
          

          <a href={"/codigoFuente"+id_problema_asignado} rel="noreferrer"  className="btnSubmit m-5">
            Revisar
          </a>

          </div>}

          {(usuario.id_tipo_usuario == 1)&&
          <div className="col-md-4" >
          

          <a href={"/codigoFuente/"+id_problema_asignado} rel="noreferrer" className="btnSubmit m-5">
            Subir Solución
          </a>

          </div>}



          <div className="col-md-4" >
          

          <a href={link} rel="noreferrer" target="_blank" className="btnSubmit m-5">
            Ver
          </a>

          </div>

         

        </div>

      </li>

    </div>


  </>

  )
}
