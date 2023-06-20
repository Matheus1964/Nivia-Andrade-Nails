import "./DescricaodoProduto.module.css"
import Icon from "../../assets/IconP.svg"
import style from "./DescricaodoProduto.module.css";
function Descricao(){
  return(
    <div className={style.Container}>
      <div className={style.DescricaoProduto}>
        <img src={Icon} alt="Icone do Produto"></img>
        <h1 className={style.Titulo_produto}>Descrição do produto</h1>
      </div>
      <div className={style.DescricaoTexto}>
        <p>As películas de água de contorno são uma opção popular para a produção de adesivos de unha com designs detalhados. Esses adesivos são impressos em um filme especial que pode ser transferido para as unhas usando água. Existem vários modelos disponíveis, incluindo flores, padrões geométricos, estampas de animais, temas sazonais, personagens e símbolos, além de arte abstrata. A variedade de designs pode variar dependendo da marca e do fornecedor.</p>
      </div>
    </div>
  );
}
export default Descricao;