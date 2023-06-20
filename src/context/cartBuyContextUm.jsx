import { createContext, useState } from "react";

export const CartBuyContextUm = createContext({});

export function CartBuyContextUmProvider({ children }) {
  const [produtos, setProdutos] = useState([]);
  const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
  const [quantidadeFolhas, setQuantidadeFolhas] = useState(0);

  const valorTotal = quantidadeFolhas * 38;

  function handleAddProduto(produto) {
    const newProdutos = [...produtos];
    let data = [];

    if (newProdutos.length === 0) {
      data = [{ ...produto, quantidade: 1 }];
      setProdutos(data);
    } else {
      data = newProdutos;

      const isExisted = newProdutos.findIndex(
        (item) => item.productId === produto.productId
      );

      if (isExisted === -1) {
        data.push({ ...produto, quantidade: 1 });
      } else {
        data[isExisted].quantidade += 1;
      }

      setProdutos(data);
      if ((quantidadeProdutos + 1) % 32 === 0) {
        setQuantidadeFolhas((prevQuantidadeFolhas) => prevQuantidadeFolhas + 1);
      }
    }

    setQuantidadeProdutos((prevQuantidadeProdutos) => prevQuantidadeProdutos + 1);
  }

  function handleRemoveProduto(productId) {
    const newProdutos = [...produtos];

    let data = [];

    newProdutos.forEach((item) => {
      if (item.productId === productId) {
        if (item.quantidade > 1) {
          data.push({
            ...item,
            quantidade: item.quantidade - 1,
          });
        }
      } else {
        data.push(item);
      }
    });

    setProdutos(data);
    setQuantidadeProdutos((prevQuantidadeProdutos) => prevQuantidadeProdutos - 1);
    if (quantidadeProdutos % 32 === 0) {
      setQuantidadeFolhas((prevQuantidadeFolhas) => prevQuantidadeFolhas - 1);
    }
  }

  return (
    <CartBuyContextUm.Provider
      value={{
        produtos,
        valorTotal,
        quantidadeProdutos,
        handleAddProduto,
        handleRemoveProduto,
        quantidadeFolhas,
      }}
    >
      {children}
    </CartBuyContextUm.Provider>
  );
}