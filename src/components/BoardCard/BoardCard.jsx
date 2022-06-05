import { Link } from "react-router-dom";

export default function BoardCard({board, user, handleDeleteBoard}) {
  let homeTeam = board.homeTeam;
  let visitTeam = board.visitTeam;
  
  // if (visitTeam.includes('Boston') || visitTeam.includes('Toronto') || visitTeam.includes('Chicago')) {
    if ('BostonChicagoToronto'.includes(visitTeam.split(' ')[0])) {
      visitTeam = visitTeam.split(' ')
      visitTeam.shift();
      visitTeam = visitTeam.join(' ')
    } else visitTeam = visitTeam.split(' ').pop();

    if (homeTeam.includes('Boston') || homeTeam.includes('Toronto') || homeTeam.includes('Chicago')) {
      homeTeam = homeTeam.split(' ')
      homeTeam.shift();
      homeTeam = homeTeam.join(' ')
    } else homeTeam = homeTeam.split(' ').pop();

    return (
        <>
          <Link to={`/boards/${board._id}`} className="board-link">
            <div
              className="card"
            >
                <div className="board-picture">
                    <h1 className="board-card-text">{visitTeam}</h1>
                    <h1 className="board-card-text">@</h1>
                    <h1 className="board-card-text">{homeTeam}</h1>
                </div>
                <div className="title">
                    <h2>ENTRY: ${board.entry}</h2>
                    {
                         (board.user === user._id && !board.squares.length) ?
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