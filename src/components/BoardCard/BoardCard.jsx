import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as gamesAPI from '../../utilities/games-api';

export default function BoardCard({board, user, handleDeleteBoard}) {
  let homeTeam = board.homeTeam;
  let visitTeam = board.visitTeam;
  const [game, setGame] = useState(null)
  let gameDate = null
  let gameTime = null

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

  if (game) {
    gameDate = game.commence_time.split(',')[0].split('/')
    gameTime = game.commence_time.split(',')[1]
    gameDate.pop()
    gameDate = gameDate.join('/')
  }

  return (
    <>
      <Link to={`/boards/${board._id}`} state={{game: game, homeTeam: homeTeam, visitTeam: visitTeam}} className="board-link" >
          <div className="card">
            <p className="card-price">${board.entry}</p>
            <div className="board-teams">
            <h1 className="board-card-text">{homeTeam} <span>{board.homeScore}</span></h1>
              <br/>
              <h1 className="board-card-text">{visitTeam}  <span>{board.visitScore}</span></h1>
                {/* {game ? 
              <p>{gameDate} {gameTime}</p>
              :
              null
              } */}
            </div>
            <div className="board-price">
              {board.homeScore ?
              <h1 className="board-card-text">Final</h1>
              :
              <>
                <h1 className="board-card-text">{gameDate}</h1>
                <br/>
                <h1 className="board-card-text">{gameTime}</h1>
                {/* <h1 className="board-card-text-2">${board.entry}</h1> */}
                {/* {
                  (board.user === user._id && !board.squares.length) ?
                  <button className="board-btn" ><Link className="nav-link" to="/boards" onClick={() => handleDeleteBoard(board._id)} >DELETE</Link></button>
                  :
                  <></>
                } */}
              </>
            }
            </div>
            {/* <div className="card-price">
              <p>Hello</p>
            </div> */}
          </div>
      </Link>
    </>
  );
}