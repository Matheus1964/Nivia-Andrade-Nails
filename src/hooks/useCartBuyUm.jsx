import { useContext } from 'react'
import {
CartBuyContextUm
} from '../context/cartBuyContextUm'

export function useCartBuyUm() {
  const context = useContext(CartBuyContextUm)

  return context
}