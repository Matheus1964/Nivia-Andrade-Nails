import React from 'react'
import styled from "./Abount.module.css"
import Maos from "../../assets/mãos.png"

function About () {
  return(

    
    <div className={styled.Container} id="Sobre">

      <img src={Maos} alt="" />
      <div className={styled.About}>
        <h1>Sobre</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos sed at sit necessitatibus dolores quidem aut, quod recusandae enim. Enim iure alias, numquam unde obcaecati error ipsam natus. Voluptate, tempore.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos sed at sit necessitatibus dolores quidem aut, quod recusandae enim. Enim iure alias, numquam unde obcaecati error ipsam natus. Voluptate, tempore.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos sed at sit necessitatibus dolores quidem aut, quod recusandae enim. Enim iure alias, numquam unde obcaecati error ipsam natus. Voluptate, tempore.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos sed at sit necessitatibus dolores quidem aut, quod recusandae enim. Enim iure alias, numquam unde obcaecati error ipsam natus. Voluptate, tempore.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos sed at sit necessitatibus dolores quidem aut, quod recusandae enim. Enim iure alias, numquam unde obcaecati error ipsam natus. Voluptate, tempore.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos sed at sit necessitatibus dolores quidem aut, quod recusandae enim. Enim iure alias, numquam unde obcaecati error ipsam natus. Voluptate, tempore.
        </p>
      </div>
    </div>

  )

}
export default About;