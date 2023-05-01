import './Contato.css'
import Footer from '../../Components/Footer/Footer'
import ContatoForm from '../../Components/Contato/ContatoForm'

function Contato(){
  const dados_contato = {
    email: "exemplodeemail@gmail.com",
    telefone: "(00) 00000-0000",
  }

  return (
    <div>
      <div className="container contato-div">
        <h1 className="title">Contato</h1>

        <div className="div-content">
          <div className="contact-info column">
            <p className="text-subtitle">Nossas informações de contato:</p>
            <div className="text-content-div">
              <div className="text-block">
                <span className="text-content-highlight">Telefone(WhatsApp): </span>
                <span className="text-content-info">{dados_contato.telefone}</span>
              </div>
              
              <div className="text-block">
                <span className="text-content-highlight">E-mail: </span>
                <span className="text-content-info">{dados_contato.email}</span>
              </div>
              
            </div>
            
          </div>

          <div className="column">
            <ContatoForm/>
          </div>

        </div>
            
      </div>
      <Footer/>

    </div>
    
  )
}

export default Contato;