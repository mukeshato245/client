import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { userRegister } from '../api/userAPI'

const Register = () => {
  const [user, setUser] = useState({
    username:"",
    email:"",
    password:""
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const {username, email, password} = user
  const handleChange = name => e => {
    setUser({...user, [name]: e.target.value})
  }

  const handleRegister = e => {
    e.preventDefault()
    userRegister(user)
    .then(data=>{
      if(data.error){
        setError(data.error)
      }
      else{
        setSuccess("User registered Successfully")
        setError('')
        setUser({username:'', email:'', password:''})
      }
    })
  }

  const showError = () => {
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }

  const showSuccess = () => {
    if(success){
      return <div className='alert alert-success'>{success}</div>
    }
  }

  return (
    <>
    <Navbar/>
      <main className="form-signin w-50 m-auto mx-auto my-5 shadow-lg p-5">
        <form>
          <img className="mb-4" src="./logo192.png" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Register</h1>
          {showError()}
          {showSuccess()}
          <div className="form-floating mb-2">
            <input type="text" className="form-control" id="floatingInputfname" placeholder="first" 
            onChange={handleChange('username')} value={username}/>
            <label htmlFor="floatingInputfname">User Name</label>
          </div>
          {/* <div className="form-floating mb-2">
            <input type="text" className="form-control" id="floatingInputlname" placeholder="last name" />
            <label htmlFor="floatingInputlname">Last Name</label>
          </div>

          <div className="form-floating mb-2">
            <input type="date" className="form-control" id="floatingInputdate" placeholder="date of birth" />
            <label htmlFor="floatingInputdate">Date of Birth</label>
          </div>

          <div className='form-floating mb-2'>
            <div className='form-control d-flex justify-content-evenly' id='gender'>
              <div className='gender-div'>
                <input type={'radio'} id="male" name='gender' className='me-2 mt-1'/>
                <label htmlFor='male'>MALE</label>
              </div>
              <div className='gender-div'>
                <input type={'radio'} id="female" name='gender' className='me-2 mt-1'/>
                <label htmlFor='female'>FEMALE</label>
              </div>
              <div className='gender-div'>
                <input type={'radio'} id="other" name='gender' className='me-2 mt-1'/>
                <label htmlFor='other'>OTHERS</label>
              </div>
            </div>
            <label htmlFor='gender'>Gender</label>
          </div>

          <div className='form-floating mb-2'>
            <select className='form-control' id='address'>
              <option>Kathmandu</option>
              <option>Bhaktapur</option>
              <option>Lalitpur</option>
              <option>Pokhara</option>
              <option>Biratnagar</option>
            </select>
            <label htmlFor='address'>Address</label>
          </div> */}


          <div className="form-floating mb-2">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
            onChange={handleChange('email')} value={email}/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-2">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
            onChange={handleChange('password')} value={password}/>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> I accept the terms and conditions.
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleRegister}>Register</button>
          I already have an account. <Link to='/login'>Sign in</Link>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
<Footer/>
    </>
  )
}

export default Register