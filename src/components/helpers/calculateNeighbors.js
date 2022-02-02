const DIRECTIONS = [
    [-1, -1], // top-left
    [-1, 0], // top-middle
    [-1, 1], // top-right
    [0, -1], // left
    [0, 1], // right
    [1, -1], // bot-left
    [1, 0], // bot-middle
    [1, 1] // bot-right
]

const calculateNeighbours = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            let numOfMines = 0
            if (board[i][j].row > 0 && board[i][j].row < board.length - 1 && board[i][j].column > 0 && board[i][j].column < board.length - 1) {
                DIRECTIONS.forEach(dir => {
                    const checkRow = dir[0]
                    const checkCol = dir[1]

                    if (board[i + checkRow][j + checkCol].isMine) {
                        numOfMines += 1
                    }
                })
                board[i][j].numOfNeighbours = numOfMines
            }
        }
    }

    return

}



export default calculateNeighbours
// [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0]
// ]



// conditions: 
// i) row >= 1 && row < n