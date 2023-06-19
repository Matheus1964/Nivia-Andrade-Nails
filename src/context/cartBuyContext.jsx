import { createContext, useEffect, useState } from "react";

export const CartBuyContext = createContext({})

export function CartBuyContextProvider({ children }) {
  const [produtos, setProdutos] = useState([])
  const [quantidadeProdutos, setQuantidadeProdutos] = useState(0)
  
  const quantidadeFolhas = quantidadeProdutos > 20 ? Math.ceil(quantidadeProdutos / 20) - 1: 0

  const valorTotal = quantidadeFolhas * 15

  function handleAddProduto(produto) {
    const newProduto = produtos
    let data = []

    if(newProduto.length === 0) {
      data = [{ ...produto, quantidade: 1 }]
      setProdutos(data)
    } else {
      data = newProduto

      const isExisted = newProduto.findIndex((item) => item.productId === produto.productId)

      if(isExisted === -1) {
        data.push({ ...produto, quantidade: 1 })
      } else {
        data[isExisted].quantidade += 1
      }
      
      setProdutos(data)
    }

    
    setQuantidadeProdutos(data.reduce((acc, item) => acc + item.quantidade, 0))
  }

  function handleRemoveProduto(productId) {
    const newProduto = produtos

    let data = []

    newProduto.forEach((item) => {
      if (item.productId === productId) {
        if (item.quantidade > 1) {
          data.push({
            ...item,
            quantidade: item.quantidade - 1,
          })
        }
      } else {
        data.push(item)
      }
    })
    
    setProdutos(data)
    setQuantidadeProdutos(data.reduce((acc, item) => acc + item.quantidade, 0))
  }

  return (
    <CartBuyContext.Provider value={{ produtos, valorTotal, quantidadeProdutos, handleAddProduto, handleRemoveProduto, quantidadeFolhas }}>
      {children}
    </CartBuyContext.Provider>
  )
}