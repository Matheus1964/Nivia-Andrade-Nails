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
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum illo adipisci minus quidem ad maiores sint aperiam error assumenda aspernatur similique aut consectetur voluptate neque recusandae ex, soluta hic saepe corrupti omnis atque. Ipsam quasi maxime ab nisi corrupti quod, voluptatem fugit temporibus saepe harum, sint repellat id doloribus expedita in. Quasi laudantium aut numquam magnam autem quae iusto consequuntur, corrupti reiciendis nisi, quod, vero unde illum totam eaque accusantium placeat! Voluptatibus nihil earum ipsa at aliquid autem enim dignissimos non dicta asperiores inventore maxime repudiandae, dolorem consequuntur, unde quibusdam sunt nam libero, aliquam incidunt nulla! Vero, maiores cumque!</p>
      </div>
    </div>
  );
}
export default Descricao;