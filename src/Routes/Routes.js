import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../Screens/Home/index";
import Contato from "../Screens/Contato/index";
import Login from "../Screens/Login/index";

function AppRoutes() {
  return (
    // Rotas

    <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
       </Routes>
      
    </Router>
  );
}

export default AppRoutes;