import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import Navbar from './Navbar'

const Homepage = () => {
    const [search, setSearch] = useState('')
    const [filteredResult, setFilteredResult] = useState([])
    const item_store = useSelector(store => store.itemStore)
    const items = item_store.items

    useEffect(()=>{
        setFilteredResult(items.filter(item=>item.product_name.toUpperCase().match(search.toUpperCase())))
    },[search])

    return (
        <>
            <Navbar />
            <div className='py-3 w-75  mx-auto'>
                <input type={'search'} className='form-control' 
                onChange={e=>setSearch(e.target.value)}/>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {
                    filteredResult.map((item, i)=>{
                        return <Card key={i} product={item}/>
                    })
                }
            </div>

        </>
    )
}

export default Homepage