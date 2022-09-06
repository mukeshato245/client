import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './GlobalContext'

const Counter = () => {
    // let counter = 100
// let [variable, function] = useState(initial value)
// variable - variable/constant whose state is to be preserved
// function - function to update values of useState variable
// initial value - initial value of useState variable, number, string, object, array

// useEffect -> to show side effects when state changes
// useEffect(function, [state variable])
// function -> side effects to be seen
// state variable -> state variables that triggers the side effect
// state variable -> []  -> renders only at the load
// state variable -> [var1, var2]  -> renders when var1 or var2 changes
// state variable ->  empty -> renders everytime
let xyz = useContext(GlobalContext)
let [counter,setCounter] = useState(0)
let [data, setData] = useState(100)
    const increase_count = () => {
        setCounter(++counter)
    }
    const decrease_count = () => {
        setCounter(--counter)
    }

    const increase_data = () => {
        setData(data+10)
    }
    const decrease_data = () => {
        setData(data-10)
    }

    useEffect(()=>{
        window.alert("count is changed")
    // }, [counter, data])
    // }, [])
    })

    return (
        <>
        {xyz}
            <div>{counter}</div>
            { counter < 10 && 
            <button onClick={increase_count}>Increase count</button>
            }
            {counter >0 && 
            <button onClick={decrease_count}>Decrease count</button>
            }
            <div>{data}</div>
            { data < 100 && 
            <button onClick={increase_data}>Increase data</button>
            }
            {data >0 && 
            <button onClick={decrease_data}>Decrease data</button>
            }
        </>
    )
}

export default Counter