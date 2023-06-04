import React from 'react';
import './Home.css'
import '../../Components/ProductList/ProductList.css'
import Header from "../../Components/Header/Navbar"



function Home() {


  return (
       <div className="home">
        <h1 className="titulo">Home</h1>
        <div className="div-row">
          {/*<ProductList/>*/}
          {/*<div className="div-exemplo"></div>*/}
          <Header/>
        </div>
        
       </div>
       
  );
}

export default Home;