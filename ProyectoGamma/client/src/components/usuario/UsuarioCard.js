import React, { useEffect } from 'react'
import { Moneda } from '../puntaje/Moneda'
import { BsFillEyeFill } from 'react-icons/bs';

export const UsuarioCard = ({usuario}) => {
    


      const style = { color: '#43c000', 
                      fontSize: "2em", 
                      filter: "drop-shadow(2px 2px 2px rgb(0 0 0 / 0.3))"
                     }

  

  return (

    <div>

      <li className="list-group-item rounded login-form-2 m-1">

        <div className='row'>
          <div className="col-md-11 d-flex justify-content-start" >
            <h3>
            {usuario.usuario}
            </h3>   
          </div>
          <div className="col-md-1" >
            <button

              className="nav-item nav-link btn navbar-log"
            
            >
              <BsFillEyeFill  style={style} />
            </button>

          </div>


        </div>

      </li>

    </div>


  )
}
