import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"




const Carrito = () => {
  const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

  return (
    <>
      <div className="container mx-auto">
        <table className="min-w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Título</th>
              <th className="py-2 px-4">Descripción</th>
              <th className="py-2 px-4">Precio</th>
              <th className="py-2 px-4">Eliminar</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {
              listaCompras.map(item => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">{item.price}</td>
                  <td className="border px-4 py-2 text-center">1</td>
                  <td className="border px-4 py-2 text-center">
                    <button type="button" className="" onClick={(id) => eliminarCompra(item.id)}>Eliminar</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>


    </>

  )
}

export default Carrito