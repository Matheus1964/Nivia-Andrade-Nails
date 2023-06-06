import React, { useState, useRef, useEffect } from 'react';
import './BotaoWhatsapp.css';
import WhatsAppIcon from '../../assets/whatsApp_icon.svg';

function BotaoWhatsapp() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef(null);
 
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [duvida, setDuvida] = useState('');
  

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  // Fecha o dialog aberto ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setIsDialogOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dialogRef]);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  // Modifica o número de telefone inserido para o formato padrão ex: (00) 0000-0000
  const handleTelefoneChange = (event) => {
    let telValue = event.target.value.replace(/\D/g, '');
    if (telValue.length === 11) {
      telValue = `(${telValue.substring(0, 2)}) ${telValue.substring(2, 7)}-${telValue.substring(7)}`;
    } else if (telValue.length === 10) {
      telValue = `(${telValue.substring(0, 2)}) ${telValue.substring(2, 6)}-${telValue.substring(6)}`;
    }
    setTelefone(telValue); 
  };

  const handleDuvidaChange = (event) => {
    setDuvida(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Nome:', nome);
    console.log('Telefone:', telefone);
    console.log('Dúvida:', duvida);
    setIsDialogOpen(false);
    var url = `https://wa.me/553498162029?text=Nome: ${nome}%0aTelefone: ${telefone}%0a Minha Duvida é:${duvida}`
    window.open(url, '_blank').focus();
  };

  return (
    <>
      {!isDialogOpen && (
        <button className="floating-btn" onClick={handleDialogOpen}>
          <img className="whatsapp-icon" src={WhatsAppIcon} alt="WhatsApp Icon" />
        </button>
      )}
      {isDialogOpen && (
        <div className="dialog" ref={dialogRef}>
          <button className="close-btn" onClick={handleDialogClose}>
            X
          </button>
          <form className="form" onSubmit={handleFormSubmit}>
            <input id="nome" type="text" placeholder="Nome" value={nome} maxLength="40" minLength="2" onChange={handleNomeChange} required/>

            <input id="telefone" type="tel" placeholder="Telefone" value={telefone} onChange={handleTelefoneChange} pattern="\([0-9]{2}\) ?[0-9]{4,5}-?[0-9]{4}" required/>

            <textarea id="duvida" placeholder="Dúvida" value={duvida} maxLength="600" minLength="2" onChange={handleDuvidaChange} required/>

            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </>
  );
}

export default BotaoWhatsapp;
