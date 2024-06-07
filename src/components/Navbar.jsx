import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className=" border-gray-200 bg-blue-300">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to='/' className="flex items-center ">
                    <span className="self-center text-2xl font-semibold ">Magic Shop</span>
                </Link>
                <div className='hover:scale-150'>
                    <Link to='/carrito'>
                        <FaShoppingCart className='text-2xl text-white hover:text-red-200 hover:animate-bounce ' />
                    </Link>
                </div>


            </div>
        </nav>

    )
}

export default Navbar