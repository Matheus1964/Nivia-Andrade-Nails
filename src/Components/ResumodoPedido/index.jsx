import styled from "./ResumodoPedido.module.css"

function Resumo (){
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
            <p className={styled.Total_Resumo}>10</p>
          </div>
          <div className={styled.Inputs_Valor}>
            <label>Quantidade total de folhas</label>
            <p className={styled.Total_Resumo}>50</p>
          </div>
          <div className={styled.Inputs_Valor}>
            <label>Valor total do produto</label>
            <p className={styled.Total_Resumo}>R$ 30,00</p>
          </div>
        </div>
      </div>
      
  )
}
export default Resumo;