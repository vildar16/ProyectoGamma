import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

export const PublicRoute = ({ children }) => {

    const {usuario} = useContext(AuthContext)



  return usuario.logged
    ? <Navigate to="/"/>
    : children
}
