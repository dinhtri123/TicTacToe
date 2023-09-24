import React, { useState } from 'react';
import Board from './Board';
import "./GameStyles.css";
import { caculatorWinner } from './helpers';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill());
    const [xIsNext, setXIsNext] = useState(true);
    const winner = caculatorWinner(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if(winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? `X` : `O`;
        setBoard(boardCopy);
        setXIsNext(xIsNext => !xIsNext);
    }
    const handleResetGame = () => {
        setBoard(Array(9).fill());
        setXIsNext(true)
    }
    return (
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            <div className={winner ? "popup-winner active" : "popup-winner"}>
                <div className='popup-winner-box'>
                    <span>{winner ? `Winner is ${xIsNext ? "O" : "X"}` : " "}</span>
                    <div className='btn-reset' onClick={handleResetGame}>Reset Game</div>
                </div>
            </div>
            
        </div>
    );
};

export default Game;