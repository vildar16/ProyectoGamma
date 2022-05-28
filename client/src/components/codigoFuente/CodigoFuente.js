import React, { useState } from 'react'
import { BsListNested } from 'react-icons/bs';
import './codigoFuente.css';
import '../auth/login.css'

export const CodigoFuente = () => {

  const [{output, statusCode, memory, cpuTime}, setCompilacion] = useState({ output:"", statusCode: 1, memory:0, cpuTime: 0})

  return (
    <div className="m-4">


      <h1 className="form-group m-6"    >Código Fuente</h1>
      <form>
        <div className="form-group textarea1" cols="600" >
          <textarea className="form-control m-6 textarea1" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
      <button type="button" class="btn btn-success">Subir Código</button>






    </div>
  )
}
