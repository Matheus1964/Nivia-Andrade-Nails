import './ContatoForm.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContatoForm(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Niviamessage', 'template_5m4dv48', e.target, 'Aptwxu7878V0YiRh6')
      .then((result) => {
        alert("deu certo");
      }, (error) => {
          alert("não deu certo");
      });
  };



  return(
    <div className="div-form">
      <div className="card-form">
        <h2>CONTATE-NOS</h2>

        <div className="line-form">

        </div>

        <div className="card-body-form">

          <form onSubmit = {sendEmail}>

            <div className="fields">
              <label>Nome:</label>
              <input type="text" name="name" placeholder="Nome"/>
            </div>

            <div className="fields">
              <label>E-mail:</label>
              <input type="text" name="email" placeholder="E-mail" />
            </div>

            <div className="fields">
              <label>Mensagem:</label>
              <textarea type="text" name="message" placeholder="Sua Mensagem" ></textarea>
            </div>

            <div className="btn-form">
              <button type="submit" value={sendEmail}>Enviar mensagem</button>
            </div>

          </form>

        </div>
      </div>
    </div>
    
  )
}

export default ContatoForm;