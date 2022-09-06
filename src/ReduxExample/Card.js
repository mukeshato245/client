import React from 'react'
import { useDispatch } from 'react-redux'

const Card = ({product}) => {
    const dispatch = useDispatch()

    const addItemToCart = () => {
        dispatch({type:"ADD_TO_CART",payload:product})
    }
    return (
        <>
            <div className="col">
                <div className="card mb-5 shadow-lg">
                    <img src={product.product_image} className="card-img-top" alt={product.product_name} style={{height:"200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.product_name}</h5>
                        <h6 className="card-title">{product.product_price}</h6>
                        <p className="card-text text-truncate" title={product.product_description} style={{height:"30px"}}>{product.product_description}</p>
                        <button className='btn btn-warning' onClick={addItemToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card