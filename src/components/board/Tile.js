export default class Tile {
    constructor(row, column) {
        this.row = row
        this.column = column
        this.isMine = false
        this.numOfNeighbours = 0
    }

    calculateNeighbours() {
        return
    }
}

// b = 
// [
//     [1,2,3],
//     [1,2,3],
//     [1,2,3]
// ]

// b[row][col].isMine == true => +1

// b[1-1][1+1]