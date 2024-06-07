import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { FaRegTrashCan } from "react-icons/fa6";





const Carrito = () => {
  const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

  return (
    <>
      <div className="container lg:mx-auto  lg:p-2">
        <table className="min-w-full ">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Título</th>
              <th className="py-2 px-4">Precio</th>
              <th className="py-2 px-4">Cantidad</th>
              <th className="py-2 px-4">Eliminar</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 ">
            {
              listaCompras.map(item => (
                <tr key={item.id}>
                  <td className="border px-4 py-2 font-bold">{item.title}</td>
                  <td className="border px-4 py-2 text-center font-bold">${item.price}</td>
                  <td className="border px-4 py-2 text-center font-bold">1</td>
                  <td className="border px-4 py-2 text-center font-bold">
                    <button type="button" className="" onClick={(id) => eliminarCompra(item.id)}><FaRegTrashCan className="text-red-400"/></button>
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