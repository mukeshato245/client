import { API } from "../config";

// user register
export const userRegister = (user) => {
    return fetch(`${API}/register`, {
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .catch(error=>console.log(error))
}

// email confirmation
export const userConfirmation = (token)=> {
    return fetch(`${API}/verifyUser/${token}`,{
        method:"GET"
    })
    .then(response => response.json())
    .catch(error=>console.log(error))
}

// forget password
export const forgetPassword = (email) => {
    return fetch(`${API}/forgetpassword`,{
        method:"POST",
        headers:{
            Accept: "application.json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email})
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

// reset password 
export const resetPassword = (password, token) => {
    return fetch(`${API}/resetpassword/${token}`,{
        method:"POST",
        headers:{
            Accept: "application.json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify({password})
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

// sign in
export const signin = (email, password) => {
    return fetch(`${API}/signin`, {
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify({email, password})
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}

// authenticate
export const authenticate = (data) => {
    localStorage.setItem('jwt', JSON.stringify(data))
}

// to check if authenticate or not
export const isAuthenticate = () => {
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false
    }
}

// sign out
export const signout = () => {
    return fetch(`${API}/signout`, {
        method: "GET"
    })
    .then(res=>res.json())
    .catch(error=>console.log(error))
}