import React from 'react';
import ProductList from '../../Components/ProductList/index.js';
import './Home.css'
import '../../Components/ProductList/ProductList.css'
import ReactModal from '../../Components/Modal';
import { useState } from 'react';

function Home() {

  const [modalIsOpen, setIsOpen] = useState(false);

  //adaptar função que será chamada se o botão Finalizar for clicado
  function clickFinalizar(){
    console.log("Finalizado")
  }

  return (
       <div className="home">
        <h1 className="titulo">Home</h1>
        <div className="div-row">
          {/*<ProductList/>*/}
          {/*<div className="div-exemplo"></div>*/}
        </div>
        
        {/*botão para teste do modal*/}
        <button onClick={() => setIsOpen(true)}>Abrir modal</button>
        <ReactModal show={modalIsOpen} setShow={setIsOpen} handleConfirmation={clickFinalizar}></ReactModal>
        
        
       </div>
       
  );
}

export default Home;