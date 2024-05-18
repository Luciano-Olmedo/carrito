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
    <div className='grid  grid-cols-1 lg:grid-cols-3 gap-10 mt-10'>     
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
    </div >
  )
}

export default ComprasPage