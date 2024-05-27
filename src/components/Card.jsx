import React, { useState } from 'react'

const Card = ({ title, description, image, price ,handleAgregar,handleQuitar,handleDisminuir,handleAumentar }) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }
    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow" >
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg mx-auto mt-4" src={image} alt="Card Product" />
            <div className="text-center">
                <h5 className="font-normal">{title}</h5>
                <p className="mb-2 text-wrap font-bold tracking-tight text-gray-900 dark:text-white  ">{description}</p>
                <p className="font-bold mt-4 text-center text-orange-500">${price}</p>
            </div>

            {

                added
                    ? <button type='button' onClick={clickQuitar} className='text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  '>Quitar del carrito</button>
                    : <button type='button' onClick={clickAgregar} className='mx-auto focus:outline-none  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>Agregar al carrito</button>
            }
        </div>
    )
}


export default Card