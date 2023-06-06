import { Link } from "react-router-dom";
import styled from "./Card.module.css"
import Card1 from "../../assets/card1.png"
import Card2 from "../../assets/card2.png"

function Card (){
  return(
    <div className={styled.Container}>
      <h1 id="Produtos">Produtos</h1>
      <div className={styled.Cards_Container}>
        <div className={styled.Cards}>
          <h2>Modelo 1,7 Centímentros</h2>
          <img src={Card1} alt="" />
          <Link to ="/produto">
            <button>Clique Aqui</button>
          </Link>
        </div>
        <div className={styled.Cards}>
          <h2>Modelo 2 Centímentros</h2>
          <img src={Card2} alt="" />
          <Link to ="/produto">
            <button>Clique Aqui</button>
          </Link>
          
        </div>
      </div>
      
    </div>


  )
}
export default Card;