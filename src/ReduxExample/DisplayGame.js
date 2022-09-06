import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const DisplayGame = () => {
    const gameStore = useSelector(store=>store.gameStore)
    const dispatch = useDispatch()

    const [game, setGame] = useState('')
    const [player, setPlayer] = useState('')

    const updateGame = () => {
       return dispatch({type:"UPDATE_GAME", payload: game}) 
    }
    const updatePlayer = () => {
        return dispatch({type:"UPDATE_PLAYER", payload: player})
    }

  return (
    <>
        <h2>Game: {gameStore.game}</h2>
        <h2>Player: {gameStore.player}</h2>

        <input type={'text'} placeholder="enter game name here" onChange={e=>setGame(e.target.value)}/>
        <button onClick={updateGame}>Update Game</button><br/>
        <input type={'text'} placeholder="enter player name here" onChange={e=>setPlayer(e.target.value)}/>
        <button onClick={updatePlayer}>Update Player</button>
        
    </>
  )
}

export default DisplayGame