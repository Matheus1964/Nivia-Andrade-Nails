
import Footer from "../../Components/Footer/Footer"
import "./Produto.css"
import Descricao from "../../Components/DescricaodoProduto";



function Produto(){
  return (
    <div>
  
    <Descricao/>
    <footer className="rodape">
      <Footer/>
    </footer>
    </div>
  )
}
export default Produto;