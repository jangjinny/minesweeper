import Tile from '../board/Tile'

const COLUMNS = 10
const ROWS = 10

const createBoard = () => {
    const board = []

    for (let i = 0; i < ROWS; i++) {
        let tmp_arr = []
        for (let j = 0; j < COLUMNS; j++) {
            const newTile = new Tile(i, j)
            tmp_arr.push(new Tile(i, j))
        }
        board.push(tmp_arr)
    }

    return board
}

export default createBoard