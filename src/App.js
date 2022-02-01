import './App.css';
import Tile from './components/board/Tile'
import Board from './components/board/Board'
import createBoard from './components/helpers/createBoard';
import generateMines from './components/helpers/generateMines';
import calculateNeighbours from './components/helpers/calculateNeighbors';

// USE FLOOD FILL ALGORITHM FOR REVEALING SURROUNDING NEIGHBOURS

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
