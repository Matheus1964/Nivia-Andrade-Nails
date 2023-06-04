import Descricao from "../../Components/DescricaodoProduto";
import Resumo from "../../Components/ResumodoPedido";
import List from "../../Components/ProductList"
import Teste from "../../Components/Footer/Footer";
import styled from "./Produto.module.css";



function Produto(){
  return (
    <div className={styled.ContainerTela}>
      <h1> Modelo 2 Centímetros</h1>
   
    <div className={styled.TelaProdutos}>
  
    <div className={styled.ListaProduto}>
      <List/>
    </div>
   <div>
   <Resumo/>
   </div>

    </div>
    <Descricao/>


    <Teste/>
    

  </div>
  )
}
export default Produto;