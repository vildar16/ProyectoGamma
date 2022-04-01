import React, { useEffect, useState } from 'react'
import { SesionCard } from './SesionCard'
import { SesionForm } from './SesionForm'
import axios from 'axios';

export const Sesion = () => {

  const [sesiones, setSesiones] = useState([])

  const getSesiones = () => {

    axios.get('http://localhost:5000/api/sesiones/')
      .then(res => { setSesiones(res.data.message) })
      .catch(error => { setSesiones([]) })

  }


  useEffect(() => {

    getSesiones()

  }, [])


  return (
    <>
            <div className="input-group m-3 col-xs-4 col-sm-4 col-md-4 col-lg-4">

            {/*<h1>Nombre de Sesión</h1>*/}
            </div>

            <div className="row">

                <div className="col-5 m-4 div-main div-with-scroll" >
                    <h1>Crear Sesión</h1>
                    <SesionForm getSesiones={getSesiones}></SesionForm>
                    
                </div>

                <div className="col div-main m-4">
                  <h1>sesiones</h1>

                  <ul className='list-group list-group-flush'>
            <div className="row">
              {
                sesiones.map((sesion) => (
                  <SesionCard
                    sesion={sesion}
                    getSesiones={getSesiones}
                    key={sesion.codigo_sesion}
                  />
                ))


              }
            </div>
          </ul>


        </div>
      </div>


            
            
            
            
    </>
    
  )
}
