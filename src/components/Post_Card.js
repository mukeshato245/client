import React from 'react'
import { Link } from 'react-router-dom'


const Post_Card = ({post}) => {
    console.log(post)
  return (
    <>
    <div className='m-5 p-5 shadow-lg'>
        <h3>Post Id: <u>{post.id}</u></h3>
        <h3>User: <u>{post.userId}</u></h3>
        <h3>Title: {post.title}</h3>
        <Link to= {`/post/${post.id}`}>View Details</Link>
    </div>

    </>
  )
}

export default Post_Card