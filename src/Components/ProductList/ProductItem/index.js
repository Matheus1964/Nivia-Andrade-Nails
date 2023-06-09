import { useState, useEffect } from 'react';
import './ProductItem.css';
import { IconContext } from "react-icons";
import { BsXCircleFill } from "react-icons/bs";

function ProductItem(
{productId, count, setCount, source}){

  const [isSelected, setIsSelected] = useState(
    sessionStorage.getItem(`product_${productId}_isSelected`) === 'true'
  );
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
    if (count <= 998){
      setCount(count + 1)
    } 
  }

  function handleDecrement(){
    if (count > 0) {
      setCount(count - 1)
    }
  }

  function firstIncrement(){
    if(count == 0){
      setCount(count + 1)
      
    }
  }

  function handleInputChange(event){
    const numberValue = Number(event.target.value)

    if (isNaN(numberValue)) {
      setCount("")
    } else if(numberValue <= 999) {
      setCount(numberValue)
    } else {
      setCount(999)
    }
  }

  function handleClick() {
    if(isSelected === false){
      firstIncrement()
    }
    setIsSelected(true)
    setIsClicked(true)
  }

  function cancelItem(){
    setCount(0)
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
          <div className={`icon-x ${addClassname("icon-visible")}`}>
            <IconContext.Provider value={{className: "mark-icon"}}>
              <BsXCircleFill onClick={cancelItem}/>
            </IconContext.Provider>
          </div>
          
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