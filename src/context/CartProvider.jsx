import {CartContext} from './CartContext'
import { useReducer } from 'react'

const initialState = []

export const CartProvider = ({Children}) => {

    const [listaCompras, dispatch] = useReducer(comprasReducer,initialState)


  return (
    <CartProvider.CartProvider>
        {Children}
    </CartProvider.CartProvider>   
  )
}

