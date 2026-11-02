import { useState } from "react";
import styles from "./TicTacToe.module.css";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className={styles["square"]}>
      {value}
    </button>
  );
}

function TicTacToe() {
  const [squares, setSqaures] = useState(Array(9).fill( ""));
  const [isXTurn, setIsXTurn] = useState(true);


  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    console.log(squares);

    setIsXTurn(!isXTurn);
    setSqaures(cpySquares);
  }
  return (
    <div className={styles["tic-tac-toe-container"]}>
      <div className={styles["row"]}>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className={styles["row"]}>
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className={styles["row"]}>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default TicTacToe;
