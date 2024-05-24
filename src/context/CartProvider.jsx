import { CartContext } from './CartContext'
import { useReducer } from 'react'

const initialState = []

export const CartProvider = ({ Children }) => {

  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

  const agregarCompra = (compra) => {
    const action = {
      type: '[CART] Agregar Compra',
      payload: compra
    }
    dispatch(action)
  }
  const aumentarCantidad = (id) => {
    const action = {
      type: '[CART] Aumentar Cantidad Compra',
      payload: id
    }
    dispatch(action)
  }
  const disminuirCantidad = (id) => {
    const action = {
      type: '[CART] disminuir Cantidad Compra',
      payload: id
    }
    dispatch(action)
  }
  const eliminarCompra = (id) => {
    const action = {
      type: '[CART] Eliminar Compra',
      payload: id
    }
    dispatch(action)
  }

  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case '[CART] Agregar Compra':
        return [...state, action.payload]

      case '[CART] Aumentar Cantidad Compra':

        break;

      case '[CART] Agregar Compra':

        break;

      case '[CART] Eliminar Compra':

        return state.filter(compra => compra.id !== action.payload)


      default:
        return state;
    }
  }


  return (
    <CartProvider.CartProvider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
      {Children}
    </CartProvider.CartProvider>
  )
}

