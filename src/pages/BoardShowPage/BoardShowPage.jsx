import './BoardShowPage.css'
import { useParams } from "react-router-dom";
import BoardTable from "../../components/BoardTable/BoardTable";

export default function BoardShowPage({boards, user, handleAddSquare}) {
    let { boardId } = useParams();
    let board = boards.find((bor) => bor._id === boardId);

    return (
        <div className='show-page'>
            <aside>
                <h1>{board.visitTeam}</h1>
            </aside>
            <div className="show-page-div">
                <h1>{board.homeTeam}</h1>
                <BoardTable board={board} user={user} handleAddSquare={handleAddSquare}/>
            </div>
        </div>
      );
}
