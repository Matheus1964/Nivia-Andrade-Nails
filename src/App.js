import './App.css';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Contato from './pages/Contato.js';

function App() {
  return (
    
    <div className="App">
      
      <div className="container">

        {/*Rota para a página de contato*/}
        <Router>
          <ul>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            
          </ul>

          <Routes>
            <Route exact path="/contato" element={<Contato/>}/>
          </Routes>

        </Router>
          {/*
          <h1 className="teste">
            nivia
          </h1>
          */}
        
      </div>
    </div>
  );
}

export default App;
