import './NewBoardPage.css'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import * as gamesAPI from "../../utilities/games-api"


export default function NewBoardPage({user, setUser, handleAddBoard}) {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const [content, setContent] = useState({
    // homeTeam: '',
    // visitTeam: '',
    gameRef: '',
    size: '',
    entry: ''
  })

  useEffect(function () {
    async function fetchAllGames() {
      const games = await gamesAPI.getAll();
      setGames(games);
    }
    fetchAllGames();
  }, []);

  function handleChange(evt) {
    console.log(evt.target.value)
    setContent({...content, [evt.target.name]: evt.target.value });  
  }

  function handleSelect(evt) {
    console.log(evt.target.value)
    // let visitTeam = evt.target.value.split(' @ ')[0].split(' ')
    // if (visitTeam[0] === 'Boston' || visitTeam[0] === 'Toronto' || visitTeam[0] === 'Chicago') {
    //   visitTeam.shift();
    //   visitTeam = visitTeam.join(' ')
    // } else visitTeam = visitTeam.pop();
    // let homeTeam = evt.target.value.split(' @ ')[1].split(' ');
    // homeTeam.pop();
    // if (homeTeam[0] === 'Boston' || homeTeam[0] === 'Toronto' || homeTeam[0] === 'Chicago') {
    //   homeTeam.shift();
    //   homeTeam = homeTeam.join(' ')
    // } else homeTeam = homeTeam.pop();
    // setContent({...content, ['homeTeam']: homeTeam, ['visitTeam']: visitTeam })
    setContent({...content, ['gameRef']: evt.target.value})
  }
    
  async function handleSubmit(evt) {
    console.log('HI')
    evt.preventDefault();
    let ok = true;
    for (const key in content) {
      if (content[key] === '') {
        ok = false;
        console.log(key)
      } 
    }
    if (ok) {
      console.log('OK')
      await handleAddBoard(content)
      navigate('/boards')
    }
  }

  return(
    <div className="new-board-div">
      <div className="form-container">
        <form>
        <label>GAME:</label>
          <select name="game" style={{textAlign:"center"}} onChange={handleSelect} >
              <option disabled selected value> -- select an option -- </option>
              {games.map((game, idx) => (
                <option value={game.id} key={game._id}>{game.away_team} @ {game.home_team} {game.commence_time.split('T')[0]}</option>
                ))}
          </select>
          {/* <label>HOME TEAM:</label>
          <input type="text" name="homeTeam" value={content.homeTeam} onChange={handleChange} />
          <label>VISITING TEAM:</label>
          <input type="text" name="visitTeam" value={content.visitTeam} onChange={handleChange} /> */}
          <label>BOARD SIZE:</label>
          <select name="size" style={{textAlign:"center"}} onChange={handleChange} >
              <option disabled selected value> -- select an option -- </option>
              <option value={25}>{25}</option>
              <option value={100}>{100}</option>
          </select>
          <label>ENTRY AMOUNT:</label>
          <input type="number" name="entry" value={content.entry} onChange={handleChange} />
          <div className="btn-div">
            <button type="submit" onClick={handleSubmit}>CREATE</button>
          </div>
        </form>
      </div>
    </div>
  );
}