import React, { useContext, useState } from 'react';
import './login.css';
import {Link, useNavigate} from 'react-router-dom'
import { types } from '../../types/types';
import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../hooks/useForm';
import axios from 'axios'
import validator from 'validator'

export const Login = () => {

    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);
    const [{ok, msg}, setValidation] = useState({ok:true, msg:''})

    const [formValues, handleInputChange] = useForm({
        correo: "",
        password: ""

    })

    const {correo, password} = formValues;


    const validarForm = () =>{
        if(!validator.isEmail(correo)){
            return{ok: false, msg: "Formato de email incorrecto."}
        }
        return{ok: true, msg: "Formato correcto."}
    }
    
    const handleLogin = async (e) => {
        e.preventDefault();
        setValidation(validarForm());

        if(ok){

            try {
                
                const res = await axios.post('http://localhost:5000/api/usuarios/login', formValues);
                console.log(res)
                const action = {
                    type: types.login,
                    payload: { 
                        nombre_usuario: res.data.data.nombre_usuario,
                        token: res.data.data.token,
                        id_tipo_usuario: res.data.data.id_tipo_usuario
                    }
                }

                dispatch(action);

                navigate('/', {replace: true});
            } catch (error) {
                setValidation({ok: false, msg: "Error al loguearse."})
            }
        }
    }


    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 login-form-2">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="correo"
                                value={correo}
                                onChange ={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                value={password}
                                onChange ={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>

                        {(!ok)&&   <div className="alert alert-danger">
                                {msg}
                        </div>}


                        <h6>¿No tienes una cuenta aún?</h6>
                        <Link 
                            to="/registro"
                            className="linkColor">
                                ¡Crea una gratis!
                            
                        </Link>
                    </form>

                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
      
    )
}