import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { FaRegTrashCan } from "react-icons/fa6";





const Carrito = () => {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

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
                  <td className="border px-4 py-2 text-center font-bold">
                    <button onClick={() => disminuirCantidad(item.cantidad)} className="px-4 py-2 border font-bold lg:mr-2 bg-blue-300 hover:scale-125 rounded-lg">menos</button>
                    <span className="px-4 py-2 border bg-white">{item.cantidad}</span>
                    <button onClick={() => aumentarCantidad(item.cantidad)} className="px-4 py-2 border font-bold lg:ml-2 bg-blue-300 hover:scale-125 rounded-lg">mas</button>


                  </td>
                  <td className="border px-4 py-2 text-center font-bold">
                    <button type="button" className="" onClick={(id) => eliminarCompra(item.id)}><FaRegTrashCan className="text-red-400" /></button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
      <button className="mx-auto focus:outline-none  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 lg:mt-4 lg:ml-2">Comprar</button>


    </>

  )
}

export default Carrito