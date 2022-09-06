import { combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer";
import itemReducer from "./itemReducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    itemStore: itemReducer,
    cartStore: cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(persistedReducer)


export default store
