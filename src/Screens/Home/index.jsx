import React from 'react';
import styled from './Home.module.css';
import FundoHome from "../../assets/background.svg"
import '../../Components/ProductList/ProductList.css'
import Header from "../../Components/Header/Navbar"
import About from '../../Components/About';


function Home() {


  return (
       <div className="home">
        <div className={styled.Header}>
          <img src={FundoHome} alt="" />
        </div>

        <main>
        </main>
        <About/>
        

        <footer>

        </footer>
       </div>
       
  );
}

export default Home;