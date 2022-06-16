import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

export const MetodoForm = ({getMetodos}) => {

    const [formValues, handleInputChange, reset] = useForm({
        nombre_metodo_resolucion: ""
    })

    const {nombre_metodo_resolucion} = formValues;

    const submitPrueba = async (e) => {
        e.preventDefault();
        console.log(nombre_metodo_resolucion)

        const res = await axios.post('/api/metodos/crear', 
        {
            nombre_metodo_resolucion: nombre_metodo_resolucion
        });
        console.log(res)

        reset()
        getMetodos()

    }
    

  return (
    <div className="container ">
                <div className="col-md-6 login-form-2">
        
                    <form onSubmit={submitPrueba}>

                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre Método"
                                name="nombre_metodo_resolucion"
                                value={nombre_metodo_resolucion}
                                onChange ={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Crear Método" 
                            />
                        </div>
                    </form>
                </div>
            </div>
  )
}
