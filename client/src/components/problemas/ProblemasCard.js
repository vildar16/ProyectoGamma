import React, { useContext } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import axios from 'axios'

export const ProblemasCard = ({ nombre, link, codigo_categoria = '', id_problema_asignado = '', asignado = false, resuelto = 0, codigo_sesion}) => {


  const { usuario, dispatch } = useContext(AuthContext)

  const onCancel = async () => {
    console.log('cancel')
  }

  const onConfirm = async (id_problema_asignado, usuario) => {
    const probs = await axios.post('/api/ayudas/crear', 
    {
     id_problema: id_problema_asignado,
     id_usuario_emisor: usuario,
     id_metodo_resolucion: 3
    }
   )
  }


  return (<>
    <div>

      <li className="list-group-item rounded login-form-2 m-4">

        <div className='row'>
          <div className="col-md-4 d-flex justify-content-start" >
            <h3>
              {nombre}
            </h3>



          </div>

          {(usuario.id_tipo_usuario == 2 && id_problema_asignado != '') &&
            <div className="col-md-2" >


              <a href={"/codigoFuente/" + id_problema_asignado} rel="noreferrer" className="btnSubmit m-5">
                Revisar
              </a>

            </div>}

          {(usuario.id_tipo_usuario == 1) &&
            <div className="col-md-2" >


              <Link
                to={"/codigoFuente/" + id_problema_asignado}
                style={{ textDecoration: "none" }}
                className="btnSubmit m-5">
                Subir

              </Link>


            </div>}

            
          <div className="col-md-2" >


            <a href={link} rel="noreferrer" target="_blank" className="btnSubmit m-5">
              Ver
            </a>

          </div>
          <div className="col-md-2" >
          

          {(resuelto===0&&usuario.id_tipo_usuario != 2)&&<h4>Asignado</h4>}
          {(resuelto===1&&usuario.id_tipo_usuario != 2)&&<h4>En revisión</h4>}
          {(resuelto===2&&usuario.id_tipo_usuario != 2)&&<h4>Aprobado</h4>}
          {(resuelto===3&&usuario.id_tipo_usuario != 2)&&<h4>Corregir</h4>}


          </div>
          <div className="col-md-2" >
          
          {(resuelto===0||resuelto===3&&usuario.id_tipo_usuario != 2)&&
          <a type="button" className="btn btn-secondary btn-lg" onClick={() => { window.confirm('¿Está seguro de pedir ayuda?') ? onConfirm(id_problema_asignado, usuario.nombre_usuario) : onCancel() } }>Ayuda</a>}
          {(resuelto===2&&usuario.id_tipo_usuario != 2)&&
          <a href={"/ataque/" + id_problema_asignado + "/" + codigo_sesion} rel="noreferrer" type="button" className="btn btn-secondary btn-lg">Ataca</a>}


          </div>




        </div>

      </li>

    </div>


  </>

  )
}
