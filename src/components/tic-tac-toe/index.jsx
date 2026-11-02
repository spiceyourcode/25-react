import { useState } from "react";
import styles from "./TicTacToe.module.css";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className={styles["square"]}>
      {value}
    </button>
  );
}

function getWinner(squares) {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function TicTacToe() {
  const [squares, setSqaures] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = getWinner(squares);
  const isDraw = !winner && squares.every((sq) => sq !== "");

  function handleClick(getCurrentSquare) {
    if (squares[getCurrentSquare] || winner) return;
    let cpySquares = [...squares];
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";

    setIsXTurn(!isXTurn);
    setSqaures(cpySquares);
  }

  function handleRestart() {
    setSqaures(Array(9).fill(""));
    setIsXTurn(true);
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
      <p className={styles["status"]}>
        {winner
          ? `Winner: ${winner}`
          : isDraw
            ? "It's a draw!"
            : `Next turn: ${isXTurn ? "X" : "O"}`}
      </p>
      {(winner || isDraw) && (
        <button className={styles["restart"]} onClick={handleRestart}>
          Restart
        </button>
      )}
    </div>
  );
}

export default TicTacToe;
