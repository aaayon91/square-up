import './BoardShowPage.css'
import { useParams } from "react-router-dom";
import BoardTable from "../../components/BoardTable/BoardTable";

export default function BoardShowPage({boards, user}) {
    let { boardId } = useParams();
    let board = boards.find((bor) => bor._id === boardId);

    return (
        <div className="show-page-div">
            <h1>{board.homeTeam} V {board.visitTeam}</h1>
            <BoardTable board={board} user={user}/>
        </div>
      );
}
