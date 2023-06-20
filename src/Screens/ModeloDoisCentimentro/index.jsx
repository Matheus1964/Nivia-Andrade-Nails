import Descricao from "../../Components/DescricaodoProduto";
import Resumo from "../../Components/ResumodoPedido";
import List from "../../Components/ProductList"
import Teste from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Navbar"
import styled from "./Produto.module.css";
import Tteste from "../../Components/BotaoWhatsapp/BotaoWhatsapp"



function Produto(){
  return (
    <div className={styled.ContainerTela}>
      <Header/>
      <h1> Modelo 2 Centímetros</h1>
   
    <div className={styled.TelaProdutos}>
  
    <div className={styled.ListaProduto}>
      <List/>
    </div>
   <div>
   <Resumo/>
   </div>
    <Tteste/>
    </div>
    <Descricao/>


    <Teste/>
    

  </div>
  )
}
export default Produto;