import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Componentes/Inicio";
import SobreMim from "./Componentes/SobreMim";
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodapé";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Pagina não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
