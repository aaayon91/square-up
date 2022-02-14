import './BoardShowPage.css'
import { useParams } from "react-router-dom";
import { useState } from 'react';
import BoardTable from "../../components/BoardTable/BoardTable";

export default function BoardShowPage({boards, user, handleAddSquare, handleAddScores}) {

    let { boardId } = useParams();
    let board = boards.find((bor) => bor._id === boardId);

    async function handleClick() {
        await handleAddScores(board._id);
    }

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
            board.squares.length === board.size ?
                <button type="submit" className="play-btn" onClick={handleClick} disabled={board.visitScore ? true : false}>PLAY!</button>
            :
                null
        }
        </>
    );
}