import './App.css';
import { printTriangle, fuzzPrint, chestBoard } from './Chapter2';
import { countString, isEven, minimun } from './Chapter3';

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
    <ul>Chapter 3: Functions
    <li>
      <label>Exercise 1: </label>
      <button onClick={() => minimun(5, 2)}>Click to print min between 5 and 2</button>
      </li>
      <li>
      <label>Exercise 2: </label>
      <button onClick={() => console.log(isEven(75))}>Click to see if 75 is even</button>
      </li>
      <li>
      <label>Exercise 3: </label>
      <button onClick={() => countString("Eloquent Javascript")}>Click to see in string "Eloquent Javascript" the number of times "a" is present</button>
      </li>
    </ul>
    </>
  );
}

export default App;
