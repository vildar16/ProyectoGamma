import { Routes, Route } from "react-router-dom";
import { Categoria } from "../components/categoria/Categoria";
import { Sesion } from "../components/sesion/Sesion";
import Placeholder from "../components/Placeholder";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />
        
        <Routes>
            <Route path="categoria" element={<Categoria />} />
            <Route path="sesion" element={<Sesion />} />
            <Route path="/" element={<Placeholder />} />
           
        </Routes>
    
    </>
  )
}
