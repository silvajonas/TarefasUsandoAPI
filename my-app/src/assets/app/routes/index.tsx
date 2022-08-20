import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login } from "../pages";


export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagina-inicial" element={<Dashboard/>} />
        <Route path="/entrar" element={<Login/>} />
        
        <Route path="*" element={<Dashboard/>} />
      </Routes>

    </BrowserRouter>
  );
};
