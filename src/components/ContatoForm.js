import './ContatoForm.css';
import { useForm } from 'react-hook-form'

function ContatoForm(){
  const { register, handleSubmit, formState: {erros} } = useForm()

  const addMessage = data => console.log(data)


  return(
    <div className="div-form">
      <div className="card-form">
        <h2>CONTATE-NOS</h2>

        <div className="line-form">

        </div>

        <div className="card-body-form">

          <form onSubmit={handleSubmit(addMessage)}>

            <div className="fields">
              <label>Nome:</label>
              <input type="text" name="name" placeholder="Nome" {...register("name")}/>
            </div>

            <div className="fields">
              <label>E-mail:</label>
              <input type="text" name="email" placeholder="E-mail" {...register("email")}/>
            </div>

            <div className="fields">
              <label>Mensagem:</label>
              <textarea type="text" name="message" placeholder="Sua Mensagem" {...register("message")}></textarea>
            </div>

            <div className="btn-form">
              <button type="submit">Enviar mensagem</button>
            </div>

          </form>

        </div>
      </div>
    </div>
    
  )
}

export default ContatoForm;
