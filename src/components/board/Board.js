import React from 'react';
import { useState, useEffect } from 'react';
import Tile from './Tile';
import createBoard from '../helpers/createBoard';
import generateMines from '../helpers/generateMines';
import calculateNeighbours from '../helpers/calculateNeighbors';


const clickHandler = (e, tile) => {
    e.target.classList.toggle("hidden")
    if (tile.isMine) {
        console.log("you stepped on a mine!")
    }
}

export default function Board() {
    const [board, setBoard] = useState(createBoard())
    generateMines(board)
    calculateNeighbours(board)

    return (
        <div className="board">
            {board.map((row, index) => (
                row.map((tile, jIndex) => (
                    <button 
                        className={tile.row == 0 || tile.row == board.length-1 || tile.column == 0 || tile.column == board.length-1 ? "tile end" : "tile hidden"}
                        onClick={(e) => { clickHandler(e, tile) } }
                        key={Math.random()}>{tile.isMine ? 'X' : tile.numOfNeighbours}</button>
                ))
            ))}
        </div>
    )
}