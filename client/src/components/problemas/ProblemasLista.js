import React, { useEffect } from 'react'
import { ProblemasCard } from './ProblemasCard'
import axios from 'axios';

export const ProblemasLista = ({ problemasLista, codigo_sesion }) => {
  useEffect(() => {
   
  }, [])
  return (
    
    
    <div>
        
    
        <ul className='list-group list-group-flush'>
          {
              problemasLista.map((problema) => (
              <ProblemasCard 
            
                nombre={problema.nombre}
                link={problema.link}
                id_problema_asignado={problema.id_problema_asignado}
                resuelto={problema.resuelto}
                codigo_sesion={codigo_sesion}
              />
            ))


          }
  </ul>
  </div>


    
  )
}
