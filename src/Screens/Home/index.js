import React from 'react';
import ProductList from '../../Components/ProductList/index.js';
import './Home.css'
import '../../Components/ProductList/ProductList.css'
function Home() {
  return (
       <div className="home">
        <h1 className="titulo">Home</h1>
        <div className="div-row">
          <ProductList/>
          {/*<div className="div-exemplo"></div>*/}
        </div>
        

        
       </div>
       
  );
}

export default Home;