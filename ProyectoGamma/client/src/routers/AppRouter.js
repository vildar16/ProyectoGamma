import React from 'react'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Login } from '../components/auth/Login';
import { Registro } from '../components/auth/Registro';
import { Navbar } from '../components/ui/Navbar';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    
    //Rutas que no requieren autenticacion
    return (

        
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                <PublicRoute>
                    
                    <Login />

                </PublicRoute>
                
                
                } />


                <Route path="/registro" element={
                <PublicRoute>

                    <Registro />
                </PublicRoute>
                
                }/>

                <Route path="/*"  element={
                    <PrivateRoute>
                        <DashboardRoutes/>

                    </PrivateRoute>
                
                } />
            </Routes>
        </BrowserRouter>


    )
}
