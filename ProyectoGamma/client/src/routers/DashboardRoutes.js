import { Routes, Route } from "react-router-dom";
import { Categoria } from "../components/categoria/Categoria";
import Placeholder from "../components/Placeholder";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar />
        
        <Routes>
            <Route path="categoria" element={<Categoria />} />
            <Route path="/" element={<Placeholder />} />
           
        </Routes>
    
    </>
  )
}
