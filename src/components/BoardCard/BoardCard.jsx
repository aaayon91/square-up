import { Link } from "react-router-dom";

export default function BoardCard({board, user}) {
    async function handleDeleteBoard() {
        console.log(board)
    }

    return (
        <>
          <Link to={`/boards/${board._id}`} className="board-link">
            <div
              className="card"
            //   style={{
            //     background: `url(${movie.poster_path}) no-repeat center center`,
            //     WebkitBackgroundSize: "cover"
            //   }}
            >
                <div className="board-picture">
                    <h1>{board.homeTeam}</h1>
                    <h1>V</h1>
                    <h1>{board.visitTeam}</h1>
                </div>
                <div className="title">
                    <h2>ENTRY: ${board.entry}</h2>
                    {
                         (board.user === user._id) ?
                         <button className="nav-btn-2" ><Link className="nav-link" to="" onClick={handleDeleteBoard} >DELETE</Link></button>
                         :
                         <></>
                     }
                 </div>
            </div>
          </Link>
        </>
      );
}

{/* <button className="nav-btn-2"><Link className="nav-link" to="" onClick={handleDelete} >DELETE</Link></button> */}