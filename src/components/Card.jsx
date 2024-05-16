import React, { useState } from 'react'

const Card = ({ title, description, image, price }) => {

    const [added, setAdded] = useState(false)
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="Card Product" />
            <div className="text-center">
                <h5 className="font-normal">{title}</h5>
                <p className="mb-2 text-wrap font-bold tracking-tight text-gray-900 dark:text-white  ">{description}</p>
                <p className="font-bold mt-4 text-center text-orange-500">${price}</p>
            </div>

            {

                added
                    ? <button type='button' className='text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Quitar del carrito</button>
                    : <button type='button' className='mx-auto focus:outline-none  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Agregar al carrito</button>
            }
        </div>
    )
}


export default Card