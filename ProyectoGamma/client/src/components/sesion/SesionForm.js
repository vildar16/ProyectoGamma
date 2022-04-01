import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

export const SesionForm = ({getSesiones}) => {

    const [formValues, handleInputChange, reset] = useForm({
        codigo_sesion: "",
        nombre_sesion: ""
    })

    const {codigo_sesion, nombre_sesion} = formValues;

    const submitPrueba = async (e) => {
        e.preventDefault();
        console.log(codigo_sesion)
        console.log(nombre_sesion)

        const res = await axios.post('http://localhost:5000/api/sesiones/crear', 
        {
            codigo_sesion: codigo_sesion,
            nombre_sesion: nombre_sesion
        });
        console.log(res)

        reset()
        getSesiones()

    }
    

  return (
    <div className="container ">
                <div className="col-md-6 login-form-2">
                    <h3>Crear Sesión</h3>
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

                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre Sesión"
                                name="nombre_sesion"
                                value={nombre_sesion}
                                onChange ={handleInputChange}
                            />
                        </div>

                        {/*<GrCatalogOption style={style}></GrCatalogOption>*/}

                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Crear Sesión" 
                            />
                        </div>
                    </form>
                </div>
            </div>
  )
}
