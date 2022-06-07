import './BoardShowPage.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import BoardTable from "../../components/BoardTable/BoardTable";
import * as boardsAPI from '../../utilities/boards-api';

export default function BoardShowPage({user, handleAddSquare}) {
    let { boardId } = useParams();
    const [board, setBoard] = useState(null)
    
    useEffect(() => {
        async function fetchBoard() {
              const board = await boardsAPI.getOne(boardId);
              setBoard(board);
            }
            fetchBoard();
    }, []);

    if(board !== null){
        return (
            <>
            <div className='show-page'>
                <aside>
                    <h1 className='outline-text'>{board.visitTeam}: <span className="span-outline" >{board.visitScore ? `${board.visitScore}` : null}</span></h1>
                </aside>
                <div className="show-page-div">
                    <h1 className='outline-text'>
                        {board.homeTeam}: <span className="span-outline" >{board.homeScore ? `${board.homeScore}` : null}</span>
                    </h1>
                    <BoardTable board={board} user={user} handleAddSquare={handleAddSquare}/>
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