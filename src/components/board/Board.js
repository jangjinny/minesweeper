import React from 'react';
import { useState, useEffect } from 'react';
import Tile from './Tile';
import createBoard from '../helpers/createBoard';
import generateMines from '../helpers/generateMines';
import calculateNeighbours from '../helpers/calculateNeighbors';
import floodFill from '../helpers/floodFill';



export default function Board() {
    const [board, setBoard] = useState(createBoard())

    const playBtnHandler = () => {
        const new_board = createBoard()
        generateMines(new_board)
        calculateNeighbours(new_board)
        setBoard(new_board)
    }

    const clickHandler = (e, tile, board) => {
        e.target.classList.toggle("hidden")
        if (tile.isMine) {
            console.log("you stepped on a mine!")
        if (tile.numOfNeighbours == 0) {
            floodFill(tile.row, tile.col)
        }
    }
}

    return (
        <div className="boardComp">
            <button className="play-btn" onClick={() => playBtnHandler()}>Play</button>
            <div className="board">
                {board.map(row => (
                    row.map(tile => (
                        <button 
                            className={tile.row == 0 || tile.row == board.length-1 || tile.column == 0 || tile.column == board.length-1 ? "tile end" : "tile"}
                            onClick={(e) => { clickHandler(e, tile, board) } }
                            key={Math.random()}>{tile.isMine ? 'X' : tile.numOfNeighbours}</button>
                    ))
                ))}
            </div>
        </div>
    )
}