import { API } from "../config"

export const getProducts = () => {
    return fetch(`${API}/productlist`,{
        method: "GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const addProduct = (product, token) => {
    return fetch(`${API}/addproduct`,{
        method:"POST",
        headers:{
            Accept: 'application/json',
            Authorization:`Bearer ${token}`
        },
        body: product
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

// to get product details
export const viewProduct = (id) => {
    return fetch(`${API}/productdetails/${id}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

// to update product
export const updateProduct = (id, product, token) => {
    return fetch(`${API}/updateproduct/${id}`,{
        method:"PUT",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization : `Bearer ${token}`
        },
        body: JSON.stringify(product)
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

// to get filtered products
export const getfilteredProducts = (filters, sortby, order, limit, skip) => {
    return fetch(`${API}/getfilteredProduct?sortby=${sortby}&order=${order}&limit=${limit}&skip=${skip}`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(filters)
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

// to get related products
export const getRelatedProducts = (id) => {
    return fetch(`${API}/relatedproducts/${id}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}