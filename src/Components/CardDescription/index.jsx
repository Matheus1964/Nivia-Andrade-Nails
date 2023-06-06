import styled from "./CardDescription.module.css"
import Unhas from "../../assets/unhas.png"

function CardDescription(){
  return(
    <div className={styled.Container}>
       <div className={styled.Cards}>
        <img src={Unhas} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quidem recusandae atque ullam nostrum reiciendis! Omnis doloribus at quis molestias quaerat natus porro reprehenderit. Cum, fugit? Repellat unde animi laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quidem recusandae atque ullam nostrum reiciendis! Omnis doloribus at quis molestias quaerat natus porro reprehenderit. Cum, fugit? Repellat unde animi laboriosam!</p>
       </div>
       <div className={styled.Cards}>
        <img src={Unhas} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quidem recusandae atque ullam nostrum reiciendis! Omnis doloribus at quis molestias quaerat natus porro reprehenderit. Cum, fugit? Repellat unde animi laboriosam!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quidem recusandae atque ullam nostrum reiciendis! Omnis doloribus at quis molestias quaerat natus porro reprehenderit. Cum, fugit? Repellat unde animi laboriosam!</p>
       </div>
    </div>
  )
}
export default CardDescription;