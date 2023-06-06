import './Modal.css';
import alertIcon from '../../assets/alert.svg';

function ReactModal({show, setShow, handleConfirmation}){

  function handleFinalizar(){
    handleConfirmation()
    setShow(false)
    
  }

  if (show === true){
    return (
      <div className="overlay">
        <div className="modal">
          
          <div className="modal-body">
            <div className="align-img">
              <img className="alert-img" src={alertIcon}/>
            </div>
            
            <div className="text-confirmation">Deseja finalizar o pedido?</div>
            <div className="align-buttons">
              <button className="modal-button"
               onClick={() => handleFinalizar()}
              >Finalizar
              </button>

              <button className="modal-button" 
              onClick={() => setShow(false)}
              >Cancelar
              </button>

            </div>

          </div>
        </div>
          

      </div>
    )} 
    else {
      return null;
    }

} 

export default ReactModal;