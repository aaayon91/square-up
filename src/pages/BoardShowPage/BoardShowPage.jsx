import './BoardShowPage.css'
import { useParams } from "react-router-dom";
import { useState } from 'react';
import BoardTable from "../../components/BoardTable/BoardTable";

export default function BoardShowPage({boards, user, handleAddSquare, handleAddScores}) {
    // const [homeTeamScore, setHomeTeamScore] = useState(null)
    // const [visitTeamScore, setVisitTeamScore] = useState(null)
    // const scores = getScores()
    // const [winner, setWinner] = useState(null);

    let { boardId } = useParams();
    let board = boards.find((bor) => bor._id === boardId);

    async function handleClick() {
        await handleAddScores(board._id);
        // setWinner(board.visitScore + board.homeScore)
        // console.log(winner)
    }

    // function getWinner() {
    //     return console.log(board.visitScore + board.homeScore, 'FINAl SCORE!!!')
    // }
    

    return (
        <>
        <div className='show-page'>
            <aside>
                <h1>{board.visitTeam} {board.visitScore ? `: ${board.visitScore}` : null}</h1>
            </aside>
            <div className="show-page-div">
                <h1>
                    {board.homeTeam} {board.homeScore ? `: ${board.homeScore}` : null}
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

{/* <button type="submit" onClick={() => handleAddScores(board._id)} disabled={board.visitScore ? true : false}>PLAY</button> */}