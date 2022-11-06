import './App.css';
import { printTriangle, fuzzPrint, chestBoard } from './Chapter2';

function App() {
  return (
    <>
    <div className="App">
      Eloquent Javascript
    </div>
    <ul>Chapter 1: Values, Types, AND Operators</ul>
    <ul>Chapter 2: Program Structure
      <li>
      <label>Exercise 1: </label>
      <button onClick={() => printTriangle()}>Click to print triangle to console</button>
      </li>
      <li>
      <label>Exercise 2: </label>
      <button onClick={() => fuzzPrint()}>Click to print fizzbuzz</button>
      </li>
      <li>
      <label>Exercise 3: </label>
      <button onClick={() => chestBoard(8)}>Click to print chessboard</button>
      </li>
    </ul>
    </>
  );
}

export default App;
