import React from 'react'
import { Link } from 'react-router-dom'

export const ProblemasCard = ({nombre, link}) => {
  return (<>
    <div>

      <li className="list-group-item rounded login-form-2 m-1">

        <div className='row'>
          <div className="col-md-8 d-flex justify-content-start" >
            <h3>
              {nombre}
            </h3>
          </div>
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
