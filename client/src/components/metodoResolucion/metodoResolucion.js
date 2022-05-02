import React, { useEffect, useState } from 'react'
import { MetodoCard } from './metodoResolucionCard'
import { MetodoForm } from './metodoResolucionForm'
import axios from 'axios';

export const Metodo = () => {

  const [metodoDeResolucion, setMetodoDeResolucion] = useState([])

  const getMetodosDeResolucion = () => {

    axios.get('http://localhost:5000/api/metodos/')
      .then(res => { setMetodoDeResolucion(res.data.message) })
      .catch(error => { setMetodoDeResolucion([]) })

  }


  useEffect(() => {

    getMetodosDeResolucion()

  }, [])


  return (
    <>
            <div className="input-group m-3 col-xs-4 col-sm-4 col-md-4 col-lg-4">

            </div>

            <div className="row">
            <h1>Crear Método</h1>        

                <div className="col-5 m-4 div-main div-with-scroll" >
    
                    <MetodoForm getMetodosDeResolucion={getMetodosDeResolucion}></MetodoForm>
                    
                </div>
            
                <div className="col div-main m-4">
                  <h1>Métodos actuales</h1>

                  <ul className='list-group list-group-flush'>
            <div className="row">
              {
                metodoDeResolucion.map((metodo) => (
                  <MetodoCard
                    metodo={metodo}
                    getMetodosDeResolucion={getMetodosDeResolucion}
                    key={metodoDeResolucion.id_metodo_resolucion}
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
