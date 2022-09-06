import axios from 'axios'
import { API } from '../../../config'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants'

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const {data} = await axios.get(`${API}/productdetails/${id}`)
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.product_name,
            price: data.product_price,
            description: data.product_description,
            image: data.product_image,
            stock: data.count_in_stock,
            quantity
        }
    })
    // console.log(id)
    localStorage.setItem('cart_items', JSON.stringify(getState().cart.cart_items))
}

export const removeItemFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem('cart_items', JSON.stringify(getState().cart.cart_items))

}