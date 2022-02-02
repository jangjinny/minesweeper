import calculateNeighbours from "./calculateNeighbors"


// NOT DONE
const floodFill = (e, tile, board) => {

    const replacement = (e) => {
        e.target.classList.remove("hidden")
    }

    const node = board[tile.row][tile.col]

    if (!node.isMine) {
        e.target.classList.remove("hidden")
    }

    return

}

export default floodFill