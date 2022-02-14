import './NewBoardPage.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function NewBoardPage({user, setUser, handleAddBoard}) {
  const navigate = useNavigate();
  const [content, setContent] = useState({
    homeTeam: '',
    visitTeam: '',
    size: '',
    entry: ''
  })

  function handleChange(evt) {
    setContent({...content, [evt.target.name]: evt.target.value });  
  }
    
  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddBoard(content)
    navigate('/boards')
  }

  return(
    <div className="new-board-div">
      <div className="form-container">
        <form>
          <label>HOME TEAM:</label>
          <input type="text" name="homeTeam" value={content.homeTeam} onChange={handleChange} />
          <label>VISITING TEAM:</label>
          <input type="text" name="visitTeam" value={content.visitTeam} onChange={handleChange} />
          <label>BOARD SIZE:</label>
          <select name="size" style={{textAlign:"center"}} onChange={handleChange}>
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