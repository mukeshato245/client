import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_INFO } from "./constants/cartConstants";

const cartReducer = (state={cart_items: [], shipping_info:{}}, action)=> {
    switch (action.type){
        case ADD_TO_CART:
            const item = action.payload
            const itemExists = state.cart_items.find(i=>i.product===item.product)
            if(itemExists){
                return {...state,
                    cart_items: [...state.cart_items.map(i=>{
                        return i.product === item.product ? item : i
                    })]
                }
            }
            else{
                return {...state, cart_items: [...state.cart_items, item]}
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart_items: [...state.cart_items.filter(item=>item.product !== action.payload)]
            }

        case SAVE_SHIPPING_INFO:

        default:
            return state
    }
}

export default cartReducer