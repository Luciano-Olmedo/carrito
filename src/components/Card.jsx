import React, { useState } from 'react'

const Card = ({ title, description, image, price }) => {

    const [added, setAdded] = useState(false)
    return (
        <div className="card" style={{width: 320}}>
            <img className="card-img-top" src={image} alt="Card Product" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text ">{description}</p>
                <p className="card-text ">${price}</p>
            </div>

            {

                added
                    ? <button type='button' className='btn btn-danger'>Quitar del carrito</button>
                    : <button type='button' className='btn btn-success'>Agregar al carrito</button>
            }
        </div>
    )
}

export default Card