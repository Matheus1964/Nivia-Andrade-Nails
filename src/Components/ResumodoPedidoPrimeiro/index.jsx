import React, { useState, useEffect } from 'react'
import styled from './ResumodoPedido.module.css'
import ButtonModal from '../ModalUm/ModalButton'
import { useCartBuyUm } from '../../hooks/useCartBuyUm'

function Resumo() {
  const { valorTotal, quantidadeProdutos, quantidadeFolhas } = useCartBuyUm()
  const [faltaProduto, setFaltaProduto] = useState(32)

  function bb() {
    if (
      quantidadeProdutos === 32 ||
      quantidadeProdutos === 64 ||
      quantidadeProdutos === 128 ||
      quantidadeProdutos === 256 ||
      quantidadeProdutos === 512
    ) {
      return false
    } else {
      return true
    }
  }

  useEffect(() => {
    if (faltaProduto === 0) {
      setFaltaProduto(32)
    } else {
      setFaltaProduto(32 - (quantidadeProdutos % 32))
    }
  }, [quantidadeProdutos])

  return (
    <div className={styled.Container}>
      <h1>Resumo do pedido</h1>
      <div className={styled.Titulo_Manual}>
        <p>
          Mínimo 21 Números
          <br />
          A cada 21 números escolhidos é montada uma folha
          <br />
          Máximo 5 folhas por pedido
        </p>
      </div>
      <div className={styled.Inputs}>
        <p>Falta {faltaProduto} produtos para completar uma nova folha</p>
        <div className={styled.Inputs_Valor}>
          <label>Quantidade total dos produtos</label>
          <p className={styled.Total_Resumo}>{quantidadeProdutos}</p>
        </div>
        <div className={styled.Inputs_Valor}>
          <label>Quantidade total de folhas</label>
          <p className={styled.Total_Resumo}>{quantidadeFolhas}</p>
        </div>
        <div className={styled.Inputs_Valor}>
          <label>Valor total do produto</label>
          <p className={styled.Total_Resumo}>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(valorTotal)}
          </p>
        </div>
        <ButtonModal isDisabled={bb()} />
      </div>
    </div>
  )
}

export default Resumo
