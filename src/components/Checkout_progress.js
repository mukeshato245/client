import React from 'react'
import { Link } from 'react-router-dom'

const Checkout_progress = ({ shipping, payment }) => {
    return (
        <>
            <div className='d-flex justify-content-evenly my-3'>
                <Link to='/cart' className='btn btn-warning'>
                    Back
                </Link>
                <Link to='/confirmorder' className='btn btn-warning'>
                    Confirm Order
                </Link>
                {
                    shipping ?
                        <Link to='/shipping' className='btn btn-warning'>
                            Shipping
                        </Link>
                        :
                        <Link to='/shipping' className='btn btn-secondary disabled'>
                            Shipping
                        </Link>


                }
                {
                    payment ?
                        <Link to='/payment' className='btn btn-warning'>
                            Payment
                        </Link>
                        :
                        <Link to='/payment' className='btn btn-secondary disabled'>
                            Payment
                        </Link>
                }
            </div>

        </>
    )
}

export default Checkout_progress