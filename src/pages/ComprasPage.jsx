import { useContext } from 'react'
import Card from '../components/Card'
import { ProductoContext } from '../context/ProductoContext'
import { CarritoContext } from '../context/CarritoContext'




const ComprasPage = () => {
  const { productos } = useContext(ProductoContext)

  const { agregarCompra, eliminarCompra } = useContext(CarritoContext)


  const handleAgregar = (compra) => {
    agregarCompra(compra)
  }
  const handleQuitar = (id) => {
    eliminarCompra(id)

  }


  return (
    <>
      <div className='grid  grid-cols-1 lg:grid-cols-3 gap-10 mt-10'>
        {
          productos.map(producto => ((
            <Card
              key={producto.id}
              image={producto.image}
              titulo={producto.title}
              description={producto.description}
              price={producto.price}
              handleAgregar={() => handleAgregar(producto)}
              handleQuitar={() => handleQuitar(producto.id)}
            >
            </Card>
          )))
        }
      </div >

    </>
  )
}

export default ComprasPage