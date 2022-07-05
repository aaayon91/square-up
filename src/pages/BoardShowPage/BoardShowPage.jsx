import './BoardShowPage.css'
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import BoardTable from "../../components/BoardTable/BoardTable";
import * as boardsAPI from '../../utilities/boards-api';
import * as squaresAPI from '../../utilities/squares-api';

export default function BoardShowPage({user}) {
    let { boardId } = useParams();
    const [board, setBoard] = useState(null);
    const location = useLocation();
    const {game, homeTeam, visitTeam} = location.state;
    const [winner, setWinner] = useState(null);
    
    useEffect(() => {
        async function fetchBoard() {
            const board = await boardsAPI.getOne(boardId);
                setBoard(board);
                if ((board.visitScore || board.visitScore === 0) && board.validated) {
                    let winner = parseInt(`${board.visitScore % 10}${board.homeScore % 10}`)
                    setWinner(winner);
                }
            }
            fetchBoard();
    }, []);

    async function handleAddSquare(boardId, pos) {
        await squaresAPI.addSquare(boardId, pos)
        const board = await boardsAPI.getOne(boardId);
        setBoard(board);
    }

    async function handleDeleteSquare(boardId, pos) {
        await squaresAPI.deleteSquare(boardId, pos)
        const board = await boardsAPI.getOne(boardId);
        setBoard(board);
    }

    if(board !== null){
        return (
            <>
            <div className='show-page'>
                <div className="card card-showpage">
                    <div className="board-teams">
                        <h1 className="board-card-text">{homeTeam} <span className='team-score'>{board.homeScore}</span></h1>
                        <br/>
                        <h1 className="board-card-text">{visitTeam} <span className='team-score'>{board.visitScore}</span></h1>
                        {/* <h3>{game.commence_time}</h3> */}
                    </div>
                    <div className="board-price">
                        <h1 className="board-card-text">Jackpot Winner:</h1>
                        <br/>
                        <h1 className="board-card-text">{winner}</h1>
                    </div>
                </div>
                {/* <aside>
                    <h1 className='outline-text'>{board.visitTeam}: <span className="span-outline" >{(board.visitScore || board.visitScore === 0) ? `${board.visitScore}` : null}</span></h1>
                </aside>
                <div className="show-page-div">
                    <h1 className='outline-text'>
                        {board.homeTeam}: <span className="span-outline" >{(board.homeScore || board.homeScore === 0) ? `${board.homeScore}` : null}</span>
                    </h1> */}
                <div id="table-scroll" className={`${board.size === 25 ? "table-scroll-small" : "table-scroll"}`} >
                    <BoardTable board={board} user={user} handleAddSquare={handleAddSquare} handleDeleteSquare={handleDeleteSquare} winner={winner}/>
                </div>
                {/* </div> */}
            </div>
            {
                (board.game_started && board.squares.length !== board.size) ?
                    <h3 className='outline-text-2'>***{board.visitTeam} @ {board.homeTeam} has already started. Game no longer valid***</h3>
                :
                null
            }
            </>
        );
    }

    return <></>

}