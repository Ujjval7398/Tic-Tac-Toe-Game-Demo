import Card from '../Card/Card'
import { useState } from "react";
import isWinner from '../Grid/CheckWinner';


function Grid({numberOfCard}) {
    const [board, setBoard] = useState(Array(numberOfCard).fill(""));
    const[turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (turn === true) {
            board[index] = "O";
        } else{
            board[index] = "X";
        }

        const win = isWinner(board, turn? "O" : "X");
if (win) {
    setWinner(win);
}
        setBoard([...board]);
        setTurn(!turn)

    }
    function reset() {
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCard).fill(""))
    }
    return(
      <div className='grid-wrapper'>
        {
            winner && (
                <><h1 className='turn-highlight'>Winner is {winner}</h1>
                <button className='reset' onClick={reset}>Reset Game</button></>
            )
        }
           <h1 className='grid-highlight'>Current turn: {(turn) ? "O" : "X" }</h1>
           <div className='grid'>
                {board.map((el, idx) => <Card gameEnd={winner ? true : false} key={idx} onPlay = {play} player={el} index={idx} />)}
           </div>
     </div>    
    )
}
export default Grid;