import React from 'react';
import styled from "./Home.module.css"
import BotaoWhatsapp from '../../Components/BotaoWhatsapp/BotaoWhatsapp';
import Navbar from '../../Components/Header/Navbar'
import About from '../../Components/About';
import Footer from '../../Components/Footer/Footer';
import CardDescription from '../../Components/CardDescription';
import Cards from "../../Components/Card"

function Home() {
  return (
    <div className={styled.home}>
      <Navbar isHomePage={true}/>
      <div className={styled.header}>
        <div className={styled.produtos}>
        <h2>A VIDA É MUITO CURTA PARA NÃO COLORIR AS UNHAS</h2>  
        <a href="#Produtos"><button >Produtos</button></a>
        </div>
      </div>
      <main>
        
        <About/>
        <CardDescription/>
        <Cards/>
        <h1>Matheus</h1>
        
      </main>
      <footer>
        <BotaoWhatsapp />
        <Footer/>
      </footer>
      
    </div>
  );
}

export default Home;
