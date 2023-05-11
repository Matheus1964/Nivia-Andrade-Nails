import React from 'react';
import BotaoWhatsapp from '../../Components/BotaoWhatsapp/BotaoWhatsapp';
import Navbar from '../../Components/Header/Navbar'

function Home() {
  return (
       <div className="home">
        <Navbar/>
        <h1 className="titulo">Home</h1>
        <BotaoWhatsapp/>
       </div>
       
  );
}

export default Home;