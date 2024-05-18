import React from 'react'

const Carrito = () => {
  return (


    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Nombre
            </th>
            <th scope="col" class="px-6 py-3">
              Precio
            </th>
            <th scope="col" class="px-6 py-3">
              Cantidad
            </th>
            <th scope="col" class="px-6 py-3">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">
              Silver
            </td>
            <td class="px-6 py-4">
              Laptop
            </td>
            <td class="px-6 py-4">
              $2999
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Microsoft Surface Pro
            </th>
            <td class="px-6 py-4">
              White
            </td>
            <td class="px-6 py-4">
              Laptop PC
            </td>
            <td class="px-6 py-4">
              $1999
            </td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Magic Mouse 2
            </th>
            <td class="px-6 py-4">
              Black
            </td>
            <td class="px-6 py-4">
              Accessories
            </td>
            <td class="px-6 py-4">
              $99
            </td>
          </tr>
        </tbody>
      </table>
      <div className='grid place-content-center mt-10'>
        <button className='mx-auto focus:outline-none  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>Comprar</button>

      </div>
    </div>

  )
}

export default Carrito