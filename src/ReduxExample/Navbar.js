import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    // const cart_store = useSelector(store=>store.cartStore)
    // const items_in_cart = cart_store.cart_items
    // const no_of_items = items_in_cart.length

    const no_of_items = useSelector(store=>store.cartStore.cart_items.length)
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/reduxhome">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reduxcart">Cart
                <span>({no_of_items})</span>
                </Link>
              </li>
              
             
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar