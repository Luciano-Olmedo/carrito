import { useContext } from "react"




const Carrito = () => {
 // const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CartContext)

  return (
    <>
        <div className="container mx-auto">
  <table className="min-w-full">
    <thead className="bg-gray-800 text-white">
      <tr>
        <th className="py-2 px-4">Título</th>
        <th className="py-2 px-4">Descripción</th>
        <th className="py-2 px-4">Precio</th>
      </tr>
    </thead>
    <tbody className="bg-gray-100">
      <tr>
        <td className="border px-4 py-2">Producto 1</td>
        <td className="border px-4 py-2">Descripción del Producto 1</td>
        <td className="border px-4 py-2 text-center">$10.00</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Producto 2</td>
        <td className="border px-4 py-2">Descripción del Producto 2</td>
        <td className="border px-4 py-2 text-center">$15.00</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Producto 3</td>
        <td className="border px-4 py-2">Descripción del Producto 3</td>
        <td className="border px-4 py-2 text-center">$20.00</td>
      </tr>
    </tbody>
  </table>
</div>

    
    </>

  )
}

export default Carrito