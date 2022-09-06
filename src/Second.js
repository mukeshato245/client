import React from 'react'
// import First from './First'
import Small from './Small'
import {Link} from 'react-router-dom'
// import './first.css'

const Second = () => {
  return (<>
    {/* <First/> */}
    <div style={{display:'flex'}}>
        This is second component.
        <Small/>
        <Link to={'/first'}>Go to First</Link>
    </div>
    </>
  )
}

export default Second