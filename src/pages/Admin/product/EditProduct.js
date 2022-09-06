import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { updateProduct, viewProduct } from '../../../api/productAPI'
import { isAuthenticate } from '../../../api/userAPI'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import { API } from '../../../config'
import AdminSidebar from '../AdminSidebar'

const EditProduct = () => {
    const [product, setProduct] = useState({
        product_name: '',
        product_price: '',
        product_description: '',
        count_in_stock: '',
        product_image: ''
    })
    const { product_name, product_price, product_description, count_in_stock, product_image } = product
    const { id } = useParams()
    const { token } = isAuthenticate()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

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
    }, [])

    const handleChange = name => e => {
        setProduct({ ...product, [name]: e.target.value })
    }

    const handleUpdate = e => {
        e.preventDefault()
        updateProduct(id, product, token)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess("Product Updated Successfully")
                }
            })
    }

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>{success}</div>
        }
    }

    return (
        <>
            <Navbar />
            <div className='row'>
                <div className='col-md-3'>
                    <AdminSidebar products />
                </div>
                <div className='col-md-9 p-5 text-start'>
                    <div className='d-flex justify-content-between w-75'>
                        <h3 className='ms-5'>
                            Products
                        </h3>
                        <Link to='/admin/products' className='btn btn-primary'>Go Back</Link>
                    </div>
                    <div className='container d-flex shadow-lg m-2'>
                        <div className='p-4 my-2 border-end border-2 text-center'>
                            <h4 className='text-center text-decoration-underline'>Product Details</h4>
                            <hr className='my-3' />
                            <img src={`${API}/${product_image}`} alt={product_name} style={{ height: "150px" }} />
                            <h5>Product Name : <u>{product_name}</u></h5>
                            <h5>Price : Rs. <u>{product_price}</u></h5>
                            <h5>Description : <u>{product_description}</u></h5>
                            <h5>In Stock : <u>{count_in_stock}</u></h5>
                        </div>
                        <form className='w-50 mx-auto p-3 my-3'>
                            <h4 className='text-center text-decoration-underline'>Update Information</h4>
                            <hr className='my-3' />
                            {showError()}
                            <label htmlFor='name'>Product Name</label>
                            <input type={'text'} id='name' value={product_name} className='form-control mb-2' onChange={handleChange('product_name')} />
                            <label htmlFor='price'>Product Price</label>
                            <input type={'text'} id='price' value={product_price} className='form-control mb-2' onChange={handleChange('product_price')} />
                            <label htmlFor='desc'>Product Description</label>
                            <textarea id='desc' value={product_description} className='form-control mb-2' onChange={handleChange('product_description')} />
                            <label htmlFor='stock'>In Stock</label>
                            <input type={'number'} id='stock' value={count_in_stock} className='form-control mb-2' onChange={handleChange('count_in_stock')} />
                            {
                                !success ?
                                <button className='btn btn-warning mt-3 form-control' onClick={handleUpdate}>Update Product</button>
                                :
                                {showSuccess}
                                
                            }
                        </form>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default EditProduct