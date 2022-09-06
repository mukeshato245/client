import React, { useState } from 'react'
import { forgetPassword } from '../api/userAPI'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        forgetPassword(email)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess('')
            }
            else{
                setSuccess(data.message)
                setError('')
            }
        })
    }
    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        return <div className='alert alert-success'>{success}</div>
    }
  return (
    <>
    <Navbar/>
    {showError()}
    {showSuccess()}

    {
        !success && 

    <form className='my-5 w-50 mx-auto p-5 shadow-lg'>
        <label htmlFor='email'>Email Address:</label>
        <input type={'text'} id='email' className='form-control' onChange={e=>setEmail(e.target.value)}/>
        <button className='btn btn-warning mt-3' onClick={handleSubmit}>Forget Password</button> 
    </form>
    }
    <Footer/>


    </>
  )
}

export default ForgetPassword