import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { API } from '../config'
import { useParams } from 'react-router-dom'
import { getRelatedProducts, viewProduct } from '../api/productAPI'
import Card from '../components/Card'
import { addItemToCart } from '../components/reducer/actions/cartActions'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        viewProduct(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setProduct(data)
                }
            })
            .catch(error => console.log(error))
        getRelatedProducts(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setRelatedProducts(data)
                    // console.log(data)
                }
            })
            .catch(error => console.log(error))
    }, [id])

    const addToCart = () => {
        dispatch(addItemToCart(id, 1))
        toast.success("Item has been added to Cart")
    }

    return (
        <>
            <Navbar />
            <ToastContainer theme='colored' position='top-left' />
            <div className='container mx-auto mt-3 shadow-lg p-5 rounded d-flex'>
                <div className='img-div w-50'>
                    <img src={`${API}/${product.product_image}`} alt={product.product_name} style={{ height: "150px" }} />
                </div>
                <div className='w-50 text-start border-start ps-5 border-3'>
                    <h5>Product Name : {product.product_name}</h5>
                    <h5>Price : Rs. {product.product_price}</h5>
                    <h5>Description : {product.product_description}</h5>
                    <h5>In Stock : {product.count_in_stock}</h5>
                    <button className='btn btn-success mt-2' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
            <h5 className='text-decoration-underline my-5 mx-auto'>Related Products</h5>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    relatedProducts.map((product, i) => {
                        return <Card key={i} product={product} />
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default ProductDetails