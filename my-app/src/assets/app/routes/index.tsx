import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "../pages/inicio";
import { Login } from "../pages/Login";


export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Pagina Inicial</h1>} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>

    </BrowserRouter>
  );
};
