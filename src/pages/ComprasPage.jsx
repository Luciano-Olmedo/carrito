import { useContext } from 'react'
import Card from '../components/Card'
import { ProductoContext } from '../context/ProductoContext'



const ComprasPage = () => {
  const {productos} = useContext(ProductoContext)


  return (
    <div className='grid  grid-cols-1 lg:grid-cols-3 gap-10 mt-10'>     
      {
        productos.map(producto => ((          
            <Card key={producto.id}
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