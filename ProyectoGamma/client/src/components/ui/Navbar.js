import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'
import './nav.css'
import {RiLogoutBoxRFill, AiOutlineLogout} from 'react-icons/ai'
export const Navbar = () => {

    const { usuario, dispatch } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = () =>{

        dispatch({ type: types.logout });

        navigate('/login', {
            replace: true
        });
    }

    return (

        
        <nav className="navbar navbar-expand-sm navbar-custom">
            
            <Link 
                className="navbar-brand ms-3" 
                to="/"
            >
                {usuario.nombre_usuario}
            </Link>
            {(usuario.id_tipo_usuario === 2)&&
            
            <div className="navbar-collapse">
            <div className="navbar-nav">

                <NavLink 
                    
                    className={({isActive}) => 'nav-item nav-link navbar-text' + (isActive ? 'active' : '')} 
                    to="/sesion"
                >
                    Sesión
                </NavLink>
            </div>
        </div>}
            

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
               
                <ul className="navbar-nav ml-auto">

                    
                    <button 
                        
                        className="nav-item nav-link btn navbar-log" 
                        onClick={handleLogout}
                    >
                        <AiOutlineLogout style= {{ color: 'white', fontSize: "1.5em" }}/>
                    </button>
                </ul>
            </div>
        </nav>
    )
}