const NUM_MINES = 10

const checkIfArrayInArrayOfArrays = (pos, arrayOfArrays) => {
    for (let i = 0; i < arrayOfArrays.length; i++) {
        let matches = 0
        for (let j = 0; j < pos.length; j++) {
            if (arrayOfArrays[i][j] == pos[j]) {
                matches += 1
            }
        }
        if (matches == 2) {
            return true
        }
    }
    return false
}

const generateArrayOfRandomPositions = (board) => {
    const randomNumbersArray = []

    while (randomNumbersArray.length < NUM_MINES) {
        const rndRow = Math.floor(Math.random() * (board.length - 2)) + 1
        const rndCol = Math.floor(Math.random() * (board.length - 2)) + 1
        const position = [rndRow, rndCol]
        if (!(checkIfArrayInArrayOfArrays(position, randomNumbersArray))) {
            randomNumbersArray.push(position)
        }
    }
    return randomNumbersArray
}

const generateMines = (board) => {

    let arr = generateArrayOfRandomPositions(board)

    for (let i = 1; i < board.length - 1; i++) {
        for (let j = 1; j < board.length - 1; j++) {
            const pos = [i, j]
            if (checkIfArrayInArrayOfArrays(pos, arr)) {
                board[i][j].isMine = true
                const index = arr.indexOf(pos)
                arr.splice(index, 1)
            }
        }
    }

    return board

}

export default generateMines