import {ProductoContext} from './ProductoContext'
import { useEffect, useState } from "react"

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([])

  const fetchProductos = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`)
      const data = await response.json()
      console.log(data)
      setProductos(data)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProductos()
  }, [])
  return (
    <ProductoContext.ProductosProvider value={{ productos }}>
      {children}
    </ProductoContext.ProductosProvider>
  )
}

