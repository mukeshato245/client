import React, {useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Post = () => {
    const [post, setPost] = useState({})
    const params = useParams()
    const id = params.id

    // const {id} = useParams()

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>setPost(response.data))
        .catch(error=>console.log(error))
    }, [params])

  return (
    <>
    <h2>User ID: {post.userId}</h2>
    <h1>Post ID: {post.id}</h1>
    <h2>Title: {post.title}</h2>
    <p>Body: {post.body}</p>
    </>
  )
}

export default Post