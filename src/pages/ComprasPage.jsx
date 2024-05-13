import React, { useState, useEffect } from 'react'
import Card from '../components/Card'

const ComprasPage = () => {
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
    <>
      <h1>Compras:</h1>
      <hr />
      {
        productos.map(producto => ((

          <Card
            image={producto.image}
            titulo={producto.title}
            description={producto.description}
            price={producto.price}
          >
          </Card>

        )))
      }


    </>
  )
}

export default ComprasPage