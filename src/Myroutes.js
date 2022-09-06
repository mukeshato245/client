import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
import First from './First'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AddCategory from './pages/Admin/category/AddCategory'
import Category from './pages/Admin/category/Category'
import DeleteCategory from './pages/Admin/category/DeleteCategory'
import UpdateCategory from './pages/Admin/category/UpdateCategory'
import AddProduct from './pages/Admin/product/AddProduct'
import DeleteProduct from './pages/Admin/product/DeleteProduct'
import EditProduct from './pages/Admin/product/EditProduct'
import Products from './pages/Admin/product/Products'
import Cart from './pages/Cart'
import ConfirmEmail from './pages/ConfirmEmail'
import ConfirmOrder from './pages/ConfirmOrder'
import Deals from './pages/Deals'
// import Cart from './pages/Cart'
// import Counter from './pages/Counter'
import Fetchdata from './pages/Fetchdata'
import ForgetPassword from './pages/ForgetPassword'
import { GlobalContextProvider } from './pages/GlobalContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Post from './pages/Post'
import ProductDetails from './pages/ProductDetails'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import UsingGlobalContext from './pages/UsingGlobalContext'
import Counter from './ReduxExample/Counter'
import DisplayGame from './ReduxExample/DisplayGame'
import Homepage from './ReduxExample/Homepage'
import Second from './Second'
import AdminRoute from './selectiveRoute/AdminRoute'
import UserRoute from './selectiveRoute/UserRoute'

const Myroutes = () => {
  return (
    <GlobalContextProvider>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />


          <Route path='/first' element={<First />} />
          <Route path='/second' element={<Second />} />
          <Route path='/second/third' element={<First />} />


          <Route path='/counter' element={<Counter />} />
          <Route path='/fetchdata' element={<Fetchdata />} />
          <Route path='/post/:id' element={<Post />} />

          <Route path='/globalcontext' element={<UsingGlobalContext />} />

          <Route path='/displaygame' element={<DisplayGame />} />

          <Route path='/reduxhome' element={<Homepage />} />
          

          <Route path='/confirmEmail/:token' element={<ConfirmEmail />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/resetpassword/:token' element={<ResetPassword />} />

          <Route path='/' element={<AdminRoute />}>
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
            <Route path='/admin/category' element={<Category />} />
            <Route path='/admin/category/add' element={<AddCategory />} />
            <Route path='/admin/category/update/:id' element={<UpdateCategory />} />
            <Route path='/admin/category/delete/:id' element={<DeleteCategory />} />
            <Route path='/admin/products' element={<Products/>}/>
            <Route path='/admin/product/add' element={<AddProduct/>}/>
            <Route path='/admin/product/edit/:id' element={<EditProduct/>}/>
            <Route path='/admin/product/delete/:id' element={<DeleteProduct/>}/>
          </Route>

          <Route path='/deals' element={<Deals/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>

          <Route path='/' element={<UserRoute/>}>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/confirmorder' element={<ConfirmOrder/>}/>
          </Route>

          {/* <Route path='/count' element={<Counter/>} */}
        </Routes>
      </Router>
    </GlobalContextProvider>
  )
}

export default Myroutes