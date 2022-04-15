import { Routes, Route } from "react-router-dom";
import { Categoria } from "../components/categoria/Categoria";
import { Sesion } from "../components/sesion/Sesion";
import Placeholder from "../components/Placeholder";
import { Navbar } from "../components/ui/Navbar";
import { UsuariosLista } from "../components/usuario/UsuariosLista";

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />
        
        <Routes>
            <Route path="categoria/:codigo_sesion" element={<Categoria />} />
            <Route path="sesion" element={<Sesion />} />
            <Route path="usuarios/:codigo_sesion" element={<UsuariosLista />} />
            <Route path="/" element={<Placeholder />} />
           
        </Routes>
    
    </>
  )
}
