import { useState, useEffect } from 'react';
import './ProductItem.css';
import { useCartBuyUm } from "../../../hooks/useCartBuyUm";

function ProductItem(
{productId, count, setCount, source, index}){
  const [isSelected, setIsSelected] = useState(
    sessionStorage.getItem(`product_${productId}_isSelected`) === 'true'
  );

  const { handleAddProduto, handleRemoveProduto } = useCartBuyUm()

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    function handleBlur() {
      if (isClicked) {
        setIsClicked(false)
      } else {
        if (count == 0) {
          setIsSelected(false)
          sessionStorage.removeItem(`product_${productId}_isSelected`)
        } else {
          setIsSelected(true);
          sessionStorage.setItem(`product_${productId}_isSelected`, 'true')
        }
      }
    }

    document.addEventListener('click', handleBlur)

    return () => {
      document.removeEventListener('click', handleBlur)
    };
  }, [isClicked, count, productId])

  function handleIncrement(){
    setCount(count + 1)
    setIsSelected(true)
    handleAddProduto({productId, source})
  }

  function handleDecrement(){
    if (count > 0) {
      setCount(count - 1)
      handleRemoveProduto(productId)
    }
  }

  function handleInputChange(event){
    const numberValue = Number(event.target.value)

    if (isNaN(numberValue)) {
      setCount("")
    } else {
      setCount(numberValue)
    }
   }

  function handleClick() {
    setIsSelected(true)
    setIsClicked(true)
  }

  function addClassname(text_class){
    if(isSelected){
      return(text_class)

    } else{
      return('')
    }

  }

  return ( 

      <div 
      className="div-product-item"
      onClick={handleClick}
      >
        <div className="element">
          <img className={`product-img ${addClassname("selected")}`} src={source}/>

          <div className="align-span">
            <span className="span-id">{productId}</span>
          </div>
            <div className={`input-div ${addClassname("visible")}`}>
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