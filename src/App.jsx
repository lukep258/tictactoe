import { useState } from 'react'
import './App.css'

function Square({value,onSquareClick}){
  return (
    <button 
      className='square' 
      onClick={onSquareClick}>
        {value}
    </button>
  )
}

function Board(){
  const [square,setSquares]=useState(Array(9).fill(null))
  const [xClick,setxClick]=useState(true)
  let status = 'Next player: X'

  function onSquareClick(sqno){
    const next=square.slice()
    if(next[sqno]||calculateWinner(square)){
      return
    }else{
      if(xClick){
        next[sqno]='X'
        status = `Next player: O`
      }else{
        next[sqno]='O'
        status = `Next player: X`
      }
      setSquares(next)
      setxClick(!xClick)
    }
  }

  function calculateWinner(square){
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i=0;i<lines.length;i++){
      const [a,b,c]=lines[i]
      if(square[a]&&square[a]===square[b]&&square[a]===square[c]){
        return square[a]
      }
    }
    return null
  }
  if(calculateWinner(square)){
    status =`Winner is ${calculateWinner(square)}`
  }

  return <>
    <div>{status}</div>
    <div id='board'>
      <Square value={square[0]} onSquareClick={()=>onSquareClick(0)}/>
      <Square value={square[1]} onSquareClick={()=>onSquareClick(1)}/>
      <Square value={square[2]} onSquareClick={()=>onSquareClick(2)}/>
      <Square value={square[3]} onSquareClick={()=>onSquareClick(3)}/>
      <Square value={square[4]} onSquareClick={()=>onSquareClick(4)}/>
      <Square value={square[5]} onSquareClick={()=>onSquareClick(5)}/>
      <Square value={square[6]} onSquareClick={()=>onSquareClick(6)}/>
      <Square value={square[7]} onSquareClick={()=>onSquareClick(7)}/>
      <Square value={square[8]} onSquareClick={()=>onSquareClick(8)}/>
    </div>
  </>
}

export default function App() {

  return(
    <div>
      <Board/>
      <div>

      </div>
    </div>
  )
}

