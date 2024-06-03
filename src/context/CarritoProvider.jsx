import { Children } from "react"
import { CarritoContext } from "./CarritoContext"

const initialState = []

export const CarritoProvider = ({ Children }) => {

    return (
        <CarritoContext>
            {Children}
        </CarritoContext>
    )
}
