import React from 'react'
import { ProblemasCard } from './ProblemasCard'
export const ProblemasLista = ({ problemasLista }) => {
  return (
    <div>
        
    
        <ul className='list-group list-group-flush'>
          {

              problemasLista.map((problema) => (
              <ProblemasCard 
                nombre={problema.nombre}
                link={problema.link}
              />
            ))


          }
  </ul>
  </div>


    
  )
}
