import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

export const PrivateRoute = ({ children }) => {

    const {usuario} = useContext(AuthContext)



  return usuario.logged
    ? children
    : <Navigate to="/login"/>
}
