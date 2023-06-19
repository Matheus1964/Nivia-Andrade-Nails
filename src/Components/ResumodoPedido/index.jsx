import styled from "./ResumodoPedido.module.css"
import ButtonModal from "../../Components/Modal/ModalButton"
import { useCartBuy } from "../../hooks/useCartBuy";


function Resumo (){
  const { valorTotal, quantidadeProdutos, quantidadeFolhas } = useCartBuy()

  return(
    
    <div className={styled.Container}>
        <h1>Resumo do pedido</h1>
        <div className={styled.Titulo_Manual}>
          <p>
          Minimo 21 Números
          <br />
          A cada 21 numeros escolhidos é 
          <br />
          montado uma folha 
          <br />
          Maximo 5 folhas por pedido
          </p>
        </div>
        <div className={styled.Inputs}>
          <p>Falta 11 produtos para completa uma nova folha</p>
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
            <p className={styled.Total_Resumo}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' } ).format(valorTotal)}</p>
          </div>
            <ButtonModal isDisabled={quantidadeFolhas === 0} />

          
        </div>
        
      </div>
      
  )
}
export default Resumo;