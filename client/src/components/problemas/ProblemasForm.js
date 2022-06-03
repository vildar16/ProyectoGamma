import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

export const ProblemasForm = ({getProblemas, id_categoria}) => {

    const [{ok, msg}, setValidation] = useState({ok: true, msg: ''})

    const [formValues, handleInputChange, reset] = useForm({
        nombre: "",
        link: ""
    })

    const { nombre, link } = formValues;

    const validarForm = () =>{
        if(nombre.length < 1){
            return{ok: false, msg: "Debe indicar un nombre"}
        }
        if(link.length < 1){
            return{ok: false, msg: "Debe indicar un link"}
        
        }else{
            
            return{ok: true, msg: "Formato correcto."}
        }
    }


    const submitProblema = async (e) => {
        e.preventDefault();
        const {ok, msg} = validarForm();
         setValidation({ok: ok, msg: msg});
        
        if(ok){
            try {
                const res = await axios.post(process.env.REACT_APP_API_CALL+'problemas/crear',
                    {
                        nombre: nombre,
                        link: link,
                        id_categoria: id_categoria
                    });
                reset();
                getProblemas();
            } catch (error) {
                console.log(error)
                setValidation({ok: false, msg: error})
            }


        }
    }



  return (
    
    <div className="container w-100">
    <div className="col-md-6 login-form-2">
        <h3>Crear Problema</h3>
        <form onSubmit={submitProblema}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange}
                   
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="link"
                    name="link"
                    value={link}
                    onChange={handleInputChange}
                />
            </div>

            
                
            
            <div className="form-group m-2">
                <input
                    type="submit"
                    className="btnSubmit"
                    value="Crear"
                />
            </div>

            {(!ok)&&   <div className="alert alert-danger">
                                {msg}
                        </div>}
           
        </form>
    </div>
</div>
  )
}
