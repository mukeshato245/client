import React from 'react'
import Checkout_progress from '../components/Checkout_progress'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { API } from '../config'
import { Link } from 'react-router-dom'

const ConfirmOrder = () => {
    const cart_items = useSelector(state => state.cart.cart_items)

    let order_items_number_arr = cart_items ? cart_items.map(items=>items.quantity): []
    let order_items_number = order_items_number_arr.reduce((acc, cur)=>acc+cur)

    let order_total_arr = cart_items ? cart_items.map(item=> item.quantity*item.price): []
    let order_total = order_total_arr.reduce((acc,cur)=>acc+cur)

    return (
        <>
            <Navbar />
            <Checkout_progress />

            <div className='container shadow-lg mx-auto p-2 my-3 py-4 row'>
                <div className='col-md-8'>
                    <div className='mx-auto'>
                    <h4 className='text-decoration-underline mb-2'>Order Details</h4>

                        {
                            cart_items.length > 0 &&
                            <table className='table text-center table-hover table-bordered table-striped'>
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Product Image</th>
                                        <th>Product Name</th>
                                        <th>Product Price</th>
                                        <th>Quantity</th>
                                        <th>Price</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart_items.map((item, i) => {
                                            return <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>
                                                    <img src={`${API}/${item.image}`} style={{ height: "100px" }} />
                                                </td>
                                                <td>
                                                    {item.name}
                                                </td>
                                                <td>
                                                    {item.price}
                                                </td>
                                                <td>
                                                    {item.quantity}
                                                </td>
                                                <td>
                                                    Rs. {item.quantity*item.price}
                                                </td>
                                            </tr>
                                        })
                                    }



                                </tbody>
                            </table>

                        }
                    </div>
                </div>
                <div className='col-md-4 border-start border-3'>
                    <h4 className='text-decoration-underline'>Order Summary</h4>
                    <h5 className='text-start my-3 p-2'>Items : {order_items_number}</h5>
                    <h5 className='text-start my-3 p-2'>Total Price : Rs. {order_total}</h5>
                    <hr className='my-3'/>
                    <Link to='/shipping' className='btn btn-success form-control'>Proceed to Shipping</Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ConfirmOrder