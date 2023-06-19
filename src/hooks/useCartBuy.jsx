import { useContext } from 'react'
import {
CartBuyContext
} from '../context/cartBuyContext'

export function useCartBuy() {
  const context = useContext(CartBuyContext)

  return context
}