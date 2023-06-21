import React from 'react';
import ReactModal from '../../Modal/index';
import styled from "./ModalButton.module.css"
import IconeCarrinho from "../../../assets/IconeCarrinho.svg"

import { useState } from 'react';
import { useCartBuyUm } from '../../../hooks/useCartBuyUm';

function ModalButton({isDisabled = false}) {
  const { produtos, quantidadeFolhas, valorTotal } = useCartBuyUm()
  const [modalIsOpen, setIsOpen] = useState(false);

  //adaptar função que será chamada se o botão Finalizar for clicado tropa do pau mole
  function clickFinalizar(){
    let mensagem = "Produto 1.7 centímetros: "
    
    produtos.forEach(produto => {
      mensagem += ` \n%0AQuantidade de figura (${produto.productId}) foi ${produto.quantidade}`
    })

    mensagem += `\n Quantidade Folhas: ${quantidadeFolhas}`
    mensagem += `\n %0ATotal: ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorTotal)}`

    window.open(`https://wa.me/553498162029?text=${mensagem}`, '_target')
  }

  return (
       <div className={styled.ModalButton}>
        {/*botão para teste do modal*/}
        <div className={styled.Button_Carrinho}>
          <img src={IconeCarrinho} alt="Icone do Carrinho" />
          <button disabled={isDisabled} onClick={() => setIsOpen(true)}>Comprar Agora</button>
        </div>
        
        
        <ReactModal show={modalIsOpen} setShow={setIsOpen} handleConfirmation={clickFinalizar}></ReactModal>
        
        
       </div>
       
  );
}

export default ModalButton;