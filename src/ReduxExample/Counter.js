import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    // const counterStore = useSelector(store=>store)
    // const count = counterStore.count
    // const data = counterStore.data

    const count = useSelector(store=>store.counterStore.count)
    const data = useSelector(store=>store.counterStore.data)

    const dispatch = useDispatch()
  return (
    <>
    <div>Count:{count}
    <button onClick={()=>dispatch({type: "INCREASE_COUNT"})}>Increase Count</button>
    <button onClick={()=>dispatch({type: "DECREASE_COUNT"})}>Decrease Count</button>

    </div>
    <div>Data: {data}</div>
    <button onClick={()=>dispatch({type: "ADD_DATA"})}>ADD DATA</button>
    <button onClick={()=>dispatch({type: "REDUCE_DATA"})}>REMOVE DATA</button>
    </>
  )
}

export default Counter