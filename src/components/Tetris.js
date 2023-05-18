import "./Tetris.css";
import Board from "./Board.js";
import {useBoard} from "../hooks/useBoard";
import GameStats from "./GameStats";
import {useGameStats} from "../hooks/useGameStats";
import Previews from "./Preview";
import {usePlayer} from "../hooks/usePlayer";

const Tetris = ({rows, columns, setGameOver}) =>{
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board, setBoard] = useBoard({
        rows, 
        columns,
        player,
        resetPlayer,
        addLinesCleared
    });
    //xxxx
   
    
    return (
        <div className="Tetris">   
            <Board board={board}/>
            <GameStats gameStats = {gameStats}/>
            <Previews tetrominos = {player.tetrominos}/>
        </div>
        
    );
}

export default Tetris;