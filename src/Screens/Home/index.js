import React from 'react';
import './Home.css'
import BotaoWhatsapp from '../../Components/BotaoWhatsapp/BotaoWhatsapp';
import Navbar from '../../Components/Header/Navbar'

function Home() {
  return (
    <div className="home">
      <Navbar isHomePage={true}/>
      <div className="header">
        <div className="produtos">
        <h2>A VIDA É MUITO CURTA PARA NÃO COLORIR AS UNHAS</h2>
        <button onClick="#">Produtos</button>
        </div>
      </div>
      <h1 className="titulo">Home</h1>
      <BotaoWhatsapp />
    </div>
  );
}

export default Home;
