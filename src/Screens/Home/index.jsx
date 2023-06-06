import React from 'react';
import styled from "./Home.module.css"
import BotaoWhatsapp from '../../Components/BotaoWhatsapp/BotaoWhatsapp';
import Navbar from '../../Components/Header/Navbar'
import About from '../../Components/About';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <div className={styled.home}>
      <Navbar isHomePage={true}/>
      <div className={styled.header}>
        <div className={styled.produtos}>
        <h2>A VIDA É MUITO CURTA PARA NÃO COLORIR AS UNHAS</h2>  
        <a href="#matheus"><button >Produtos</button></a>
        </div>
      </div>
      <main>
        <About/>
      </main>
      <footer>
        <BotaoWhatsapp />
        <Footer/>
      </footer>
      
    </div>
  );
}

export default Home;
