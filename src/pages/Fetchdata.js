import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Post_Card from '../components/Post_Card'

const Fetchdata = () => {
    const [posts, setPosts] = useState([])
    const [limit, setLimit] = useState(20)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setPosts(res.data.slice(0, limit)))
            .catch(error => console.log(error))
    }, [limit])


    return (
        <>
        <div className='row row-cols-4 g-5'>
            {
                posts.map(item => {
                    return <>
                       <Post_Card post={item}/>
                    </>
                })
            }
            {
                posts.length < 100 &&
                <button onClick={() => setLimit(limit + 20)}>Show more</button>
            }
            {
                posts.length > 0 &&
                <button onClick={() => setLimit(limit - 20)}>Show less</button>
            }
            </div>
        </>
    )
}

export default Fetchdata