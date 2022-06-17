import React, { useContext, useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../auth/authContext'
import axios from 'axios';

export const AtaquesForm = (id_problema_asignado, codigo_sesion) => {

  const { usuario } = useContext(AuthContext)
  const [formValues, handleInputChange, reset] = useForm({
      usuario_receptor: ""
  })
  const [usuarios, setUsuarios] = useState([])

  const {usuario_receptor} = formValues;

  useEffect(() => {

    getUsuarios()
    
  }, [])

  const getUsuarios = async () => {
    
    const users = await axios.post('/api/usuarios/atacar', 
      {
        id_quest: id_problema_asignado.codigo_sesion,
        id_usuario: usuario.nombre_usuario
      }
    )
      .then(res => { setUsuarios(res.data.message) })
      .catch(error => { setUsuarios([]); console.log("error") })
      console.log(usuarios)
  }
  
  const submitPrueba = async (e) => {
      e.preventDefault();
      console.log(usuario_receptor)

      const res = await axios.post('/api/ataques/crear', 
      {
          id_problema: id_problema_asignado.id_problema_asignado,
          id_usuario_emisor: usuario.nombre_usuario,
          id_usuario_receptor: usuario_receptor,
          id_metodo_resolucion: 2
      });
      console.log(res)

      reset()
      getUsuarios()

  }
    

  return (
    <div className="container ">
                <div className="col-md-6 login-form-2">
                    <h3>Atacar</h3>
                    <form onSubmit={submitPrueba}>
                      <ul className="form-group">
                        <select multiple className="form-control" id="idUsuarioReceptor" name='usuario_receptor'  onChange={handleInputChange} required>
                          {
                            usuarios.map((user) => (
                              <option>{user.nombre_usuario}</option>
                            ))
                          }
                        </select>
                      </ul>
                      <div >
                        <input 
                            type="submit"
                            className="btn btn-secondary btn-lg"
                            value="Atacar Usuario" 
                        />
                      </div>
                    </form>
                </div>
            </div>
  )
}
