import { Link } from "react-router-dom";

export default function BoardCard({board, user, handleDeleteBoard}) {

    return (
        <>
          <Link to={`/boards/${board._id}`} className="board-link">
            <div
              className="card"
            >
                <div className="board-picture">
                    <h1 className="board-card-text">{board.homeTeam}</h1>
                    <h1 className="board-card-text">V</h1>
                    <h1 className="board-card-text">{board.visitTeam}</h1>
                </div>
                <div className="title">
                    <h2>ENTRY: ${board.entry}</h2>
                    {
                         (board.user === user._id) ?
                         <button className="nav-btn-2" ><Link className="nav-link" to="/boards" onClick={() => handleDeleteBoard(board._id)} >DELETE</Link></button>
                         :
                         <></>
                     }
                 </div>
            </div>
          </Link>
        </>
      );
}