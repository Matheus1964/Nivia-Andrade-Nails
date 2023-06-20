import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../Screens/Home/index";
import Contato from "../Screens/Contato/index";
import Login from "../Screens/Login/index";
import ModeloDoisCentimentro from "../Screens/ModeloDoisCentimentro/index";
import ModeloUmCentimentro from "../Screens/ModeloUmCentimentro/index";

function AppRoutes() {
  return (
    // Rotas

    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Produto/Modelo2cm" element={<ModeloDoisCentimentro />} />
          <Route path="/Produto/Modelo1.7cm" element={<ModeloUmCentimentro />} />
          

          
       </Routes>
      
    </Router>
  );
}

export default AppRoutes;