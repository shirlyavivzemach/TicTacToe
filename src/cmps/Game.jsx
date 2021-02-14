import React, { useState } from 'react'
import '../App.css';
import { Square } from './Square';
import { WinLogic } from './WinLogic';

export default function Game() {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isNext, setIsNext] = useState(true)
   

    const winningInfo = WinLogic(squares)
    const winner = winningInfo.winner

    const winnerHightlight = winningInfo.line;
    let status;

    if (winner) {
        status = "The Winner is " + winner
    }
    else if ( winningInfo.isDraw) {
        status = "It's a Draw"
       
    }
    else {
        status= "Next player is " + (isNext ? 'X' : 'O');
    }


function renderSquare(i) {
    return <Square
        onClick={() => {
            const nextSquare = squares.slice();
            nextSquare[i] = isNext ? 'X' : 'O';
            setIsNext(!isNext)
            setSquares(nextSquare)
        }}
        value={squares[i]}
        highlightWinner ={winnerHightlight && winnerHightlight.includes(i)}
    />
    
    }
return (
    <div className="bord">
        <div className="status">{status}</div>
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </div>
)


}






