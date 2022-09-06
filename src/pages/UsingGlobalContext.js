import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const UsingGlobalContext = () => {
    const value = useContext(GlobalContext)


  return (
    
        <div>
            {value.name}
            <h1>{value.address}</h1>
        </div>

  )
}

export default UsingGlobalContext