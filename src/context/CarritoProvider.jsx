import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"

const initialState = []

export const CarritoProvider = ({ Children }) => {

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    const agregarCompra = (compra) => {
        const action = {
            type: '[CARRITO] Nuevo',
            payload: compra
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir',
            payload: id
        }
        dispatch(action)
    }
    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar',
            payload: id
        }
        dispatch(action)
    }
    //REDUCER
    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO] Nuevo':
                return [...state, action.payload]
            case '[CARRITO] Aumentar':
                break;
            case '[CARRITO] Disminuir':
                break;
            case '[CARRITO] Eliminar':
                return state.filter(compra => compra.id !== action.payload)
            default:
                return state
        }
    }





    return (
        <CarritoContext>
            {Children}
        </CarritoContext>
    )
}
