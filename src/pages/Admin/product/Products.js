import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../../api/productAPI'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import { API } from '../../../config'
import AdminSidebar from '../AdminSidebar'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setProducts(data)
            }
        })
        .catch(err=>console.log(err))
    },[])
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
                <Link to='/admin/product/add' className='btn btn-primary'>Add Product</Link>
            </div>
<div className='container'>
            <table className='table table-hover table-striped text-center p-3 mt-2 shadow'>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Count in Stock</th>
                        <th>Unit Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    products.map((product,i)=>{
                        return <tr key={i}>
                            <td>{i+1}</td>
                            <td>
                                <img src={`${API}/${product.product_image}`} style={{height:'150px'}} />
                            </td>
                            <td><h5>{product.product_name}</h5></td>
                            <td><h5>{product.count_in_stock}</h5></td>
                            <td><h5>{product.product_price}</h5></td>
                            <td>
                                <div className='btn-group'>
                                    <Link to={`/admin/product/edit/${product._id}`} className='btn btn-warning'><i className='bi bi-pencil'></i></Link>
                                    <Link to={`/admin/product/delete/${product._id}`} className='btn btn-danger'><i className='bi bi-trash'></i></Link>
                                </div>
                            </td>
                        </tr>
                    })
                  }
                </tbody>
            </table>
            </div>
        </div>
    </div>


    <Footer />
</>
  )
}

export default Products