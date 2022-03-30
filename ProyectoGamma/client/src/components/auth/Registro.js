import React from 'react';
import './login.css';
import {Link} from 'react-router-dom'

export const Registro = () => {
    return (
        <div className="container login-container">
          
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Primer Apellido"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Segundo Apellido"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre de Usuario"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>

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