import React from 'react';
import ProductList from '../../Components/ProductList/index.js';

function Home() {
  return (
       <div className="home">
        <h1 className="titulo">Home</h1>
        <ProductList/>
       </div>
       
  );
}

export default Home;