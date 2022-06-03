import { Routes, Route } from "react-router-dom";
import { Categoria } from "../components/categoria/Categoria";
import { Sesion } from "../components/sesion/Sesion";
import { Metodo } from "../components/metodoResolucion/metodoResolucion";
import Placeholder from "../components/Placeholder";
import { Navbar } from "../components/ui/Navbar";
import { UsuariosLista } from "../components/usuario/UsuariosLista";
import { Problemas } from "../components/problemas/Problemas";
import { CodigoFuente } from "../components/codigoFuente/CodigoFuente";
import { ProblemasAsignados } from "../components/problemasAsignados/ProblemasAsignados";
import { Canje } from "../components/canje/Canje";

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />
        
        <Routes>
            <Route path="categoria" element={<Categoria />} />
            <Route path="sesion" element={<Sesion />} />
            <Route path="metodo" element={<Metodo />} />
            <Route path="problemas/:codigo_categoria" element={<Problemas />} />
            <Route path="usuarios/:codigo_sesion" element={<UsuariosLista />} />
            <Route path="codigoFuente/:codigo_problema_asignado" element={<CodigoFuente />} />
            <Route path="problemasAsignados/:codigo_sesion" element={<ProblemasAsignados />} />
            <Route path="canje" element={<Canje />} />
            <Route path="/" element={<Placeholder />} />
           
        </Routes>
    
    </>
  )
}
