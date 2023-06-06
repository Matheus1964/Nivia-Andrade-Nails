import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../Screens/Home/index";
import Contato from "../Screens/Contato/index";
import Login from "../Screens/Login/index";
import Produto from "../Screens/Produto/index";

function AppRoutes() {
  return (
    // Rotas

    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Produto" element={<Produto />} />
       </Routes>
      
    </Router>
  );
}

export default AppRoutes;