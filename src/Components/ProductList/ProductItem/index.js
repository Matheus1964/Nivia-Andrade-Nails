import './ProductItem.css';

function ProductItem(
{productId, count, setCount, source}){

  function handleIncrement(){
    setCount(count + 1);
    
  }

  function handleDecrement(){
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleInputChange(event){
    const numberValue = Number(event.target.value);

    if (isNaN(numberValue)) {
      setCount("");
    } else{
      setCount(numberValue)
    }
  }

  return ( 

      
      <div className="div-product-item" key={productId}>
        <div className="element">
          <img className="product-img" src={source}/>

          <div className="align-span">
            <span className="span-id">{productId}</span>
          </div>
          
          <div className="input-div">
            <button className="button-decrement"
            onClick={handleDecrement}>
              -
            </button>

            <input 
            type="text" 
            value={count || 0} 
            onChange={handleInputChange}
            className="counter-value"
            />
            
            <button className="button-increment"
            onClick={handleIncrement}>
              +
            </button>
            
          </div>
          
          
          
        </div>

      </div>


    
  )
}

export default ProductItem;