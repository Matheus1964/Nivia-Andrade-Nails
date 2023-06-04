import React from 'react';
import ReactModal from '../../Modal/index';
import styled from "./ModalButton.module.css"
import IconeCarrinho from "../../../assets/IconeCarrinho.svg"

import { useState } from 'react';

function ModalButton() {

  const [modalIsOpen, setIsOpen] = useState(false);

  //adaptar função que será chamada se o botão Finalizar for clicado
  function clickFinalizar(){
    console.log("Finalizado")
  }

  return (
       <div className={styled.ModalButton}>
        {/*botão para teste do modal*/}
        <div className={styled.Button_Carrinho}>
          <img src={IconeCarrinho} alt="Icone do Carrinho" />
          <button onClick={() => setIsOpen(true)}>Comprar Agora</button>
        </div>
        
        
        <ReactModal show={modalIsOpen} setShow={setIsOpen} handleConfirmation={clickFinalizar}></ReactModal>
        
        
       </div>
       
  );
}

export default ModalButton;