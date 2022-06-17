import React from 'react'
import { AtaquesForm } from './AtaquesForm'
import { useParams } from 'react-router-dom'

export const Ataques = () => {

  const { codigo_problema_asignado, codigo_sesion } = useParams()
  console.log("CATE",codigo_sesion)

  console.log("PROB",codigo_problema_asignado)
  return (
    <>
            <div className="input-group m-3 col-xs-4 col-sm-4 col-md-4 col-lg-4">


            </div>

            <div className="row">

                <div className="col-5 m-4 div-main div-with-scroll" >
                    <h1>Atacar Usuario</h1>
                    <AtaquesForm 
                      id_problema_asignado= {codigo_problema_asignado}
                      codigo_sesion= {codigo_sesion}
                    ></AtaquesForm>
                    
                </div>

                <div className="col div-main m-4">
                
        </div>
      </div>


            
            
            
            
    </>
    
  )
}
