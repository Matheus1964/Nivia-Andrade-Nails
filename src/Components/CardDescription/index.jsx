import styled from "./CardDescription.module.css"
import Unhas from "../../assets/download.jpg"
import Unhas1 from "../../assets/download2.png"

function CardDescription(){
  return(
    <div className={styled.Container}>
       <div className={styled.Cards}>
        <img src={Unhas} alt="" />
        <p>Nossa querida amiga Maria ficou muito satisfeita com o nosso produto, eu fico muito grata por está fornecendo um produto de qualidade para tantas muheres como a joyce, que resolve dá um up na sua alta estima escolhendo nossos modelos de películas de água de
        contorno para produção de adesivos de unha, Para mais informações acesse nivia-andrade-nails.vercel.app</p>
       </div>
       <div className={styled.Cards}>
        <img src={Unhas1} alt="" />
        <p>Nossa querida amiga Joyce ficou muito satisfeita com o nosso produto, eu fico muito grata por está fornecendo um produto de qualidade para tantas mulheres como a joyce, que resolve dá um up na sua autoestima escolhendo nossos modelos de películas de água de
        contorno para produção de adesivos de unha, Para mais informações acesse nivia-andrade-nails.vercel.app</p>
       </div>
    </div>
  )
}
export default CardDescription;