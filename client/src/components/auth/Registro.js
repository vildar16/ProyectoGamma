import React, { useContext, useState } from 'react';
import './login.css';
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../hooks/useForm';
import axios from 'axios'
import validator from 'validator';
import { types } from '../../types/types';

export const Registro = () => {

    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);
    const [{ok, msg}, setValidation] = useState({ok: true, msg: ''})
    const [{creado, msgCreado}, setCreado] = useState({ok: false, msg: ''})

    const [formValues, handleInputChange, reset]=useForm({
        nombre_usuario: '',
        nombre: '',
        apellido1: '',
        apellido2: '',
        correo: '',
        password: '',
        password2: ''

    })

    const {nombre_usuario, nombre, apellido1, apellido2, correo, password, password2} = formValues;


    const validarForm = () => {
        if(nombre.trim().length===0 || apellido1.trim().length===0 || apellido2.trim().length===0 || nombre_usuario.trim().length===0) {
            return {ok: false, msg: "El nombre y los apellidos son requeridos."};

        }else if ( !validator.isEmail(correo) ){
            return {ok: false, msg: "El formato del correo no es correcto."};;

        }else if(password !== password2){
            return {ok: false, msg: "Las contraseñas deben coincidir"};
        }
        
        return {ok: true, msg: "Datos correctos"};
    }

    const handleRegistro = async (e) => {
        e.preventDefault()

        setValidation(validarForm());
        
        if(ok){


            try {
                const res = await axios.post('http://localhost:5000/api/usuarios/registro',
                {
                    nombre: nombre,
                    nombre_usuario: nombre_usuario,
                    apellido1: apellido1,
                    apellido2: apellido2,
                    correo: correo,
                    password: password




                }
                );
                    
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
                setValidation({ok: true, msg: ''})
                setCreado(res)
                
            } catch (error) {
                
                console.log(error)
                setValidation({ok: error.response.data.ok, msg: error.response.data.msg})
                
            }
        }else{
            setValidation({ok: ok, msg: msg})
        }




    }


    return (
        <div className="container login-container">
          
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegistro}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="nombre"
                                value={nombre}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Primer Apellido"
                                name="apellido1"
                                value={apellido1}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Segundo Apellido"
                                name="apellido2"
                                value={apellido2}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre de Usuario"
                                name="nombre_usuario"
                                value={nombre_usuario}
                                onChange={handleInputChange}
                            />
                            
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="correo"
                                value={correo}
                                onChange={handleInputChange}
                            />
                            
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                            />
                            
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="password2"
                                value={password2}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                        {(!ok)&&   <div className="alert alert-danger">
                                {msg}
                        </div>}
                        <h6>¿Ya tienes una cuenta?</h6>
                        <Link 
                            to="/login"
                            className="linkColor">
                                ¡Ingresa!
                            
                        </Link>
                    </form>

                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}