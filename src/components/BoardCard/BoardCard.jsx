import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as gamesAPI from '../../utilities/games-api';

export default function BoardCard({board, user, handleDeleteBoard}) {
  let homeTeam = board.homeTeam;
  let visitTeam = board.visitTeam;
  const [game, setGame] = useState(null)

  useEffect(() => {
    async function fetchGame() {
      const game = await gamesAPI.getOne(board.gameRef);
      setGame(game);
    }
    if (board.gameRef) {
      fetchGame();
    }
  }, []);
  
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
      <Link to={`/boards/${board._id}`} state={{game: game}} className="board-link" >
        <div className="card-2">
          <div className="board-teams">
              <h1 className="board-card-text">{visitTeam}</h1>
              <br/>
              <h1 className="board-card-text">{homeTeam}</h1>
                {game ? 
              <h3>{game.commence_time}</h3>
              :
              null
              }
          </div>
          <div className="board-price">
            <h1 className="board-card-text-2">${board.entry}</h1>
            {
              (board.user === user._id && !board.squares.length) ?
              <button className="board-btn" ><Link className="nav-link" to="/boards" onClick={() => handleDeleteBoard(board._id)} >DELETE</Link></button>
              :
              <></>
            }
          </div>
        </div>
      </Link>
    </>
  );
}