import './BoardShowPage.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import BoardTable from "../../components/BoardTable/BoardTable";
import * as boardsAPI from '../../utilities/boards-api';
import * as squaresAPI from '../../utilities/squares-api';

export default function BoardShowPage({user}) {
    let { boardId } = useParams();
    const [board, setBoard] = useState(null)
    
    useEffect(() => {
        async function fetchBoard() {
              const board = await boardsAPI.getOne(boardId);
              setBoard(board);
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
                <aside>
                    <h1 className='outline-text'>{board.visitTeam}: <span className="span-outline" >{(board.visitScore || board.visitScore === 0) ? `${board.visitScore}` : null}</span></h1>
                </aside>
                <div className="show-page-div">
                    <h1 className='outline-text'>
                        {board.homeTeam}: <span className="span-outline" >{(board.homeScore || board.homeScore === 0) ? `${board.homeScore}` : null}</span>
                    </h1>
                    <BoardTable board={board} user={user} handleAddSquare={handleAddSquare} handleDeleteSquare={handleDeleteSquare}/>
                </div>
                
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