import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

export const JoinForm = ({getSesionesUsuario, nombre_usuario}) => {

    const [formValues, handleInputChange, reset] = useForm({
        codigo_sesion: ""
    })

    const {codigo_sesion, nombre_sesion} = formValues;

    const submitPrueba = async (e) => {
        e.preventDefault();
        console.log(codigo_sesion)

        const res = await axios.post('http://localhost:5000/api/usuarios/ingresar_sesion', 
        {
            codigo_sesion: codigo_sesion,
            nombre_usuario: nombre_usuario
        });
        console.log(res)

        reset()
        getSesionesUsuario()

    }
    

  return (
    <div className="container ">
                <div className="col-md-6 login-form-2">
                    <h3>Ingresar Sesión</h3>
                    <form onSubmit={submitPrueba}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Código"
                                name="codigo_sesion"
                                value={codigo_sesion}
                                onChange ={handleInputChange}
                            />
                        </div>

                        {/*<GrCatalogOption style={style}></GrCatalogOption>*/}

                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Ingresar" 
                            />
                        </div>
                    </form>
                </div>
            </div>
  )
}
