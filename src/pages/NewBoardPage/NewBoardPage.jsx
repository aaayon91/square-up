import { useState } from 'react';
import {handleAddBoard} from '../BoardListPage/BoardListPage'

export default function NewBoardPage({user, setUser, handleAddBoard}) {
    const [content, setContent] = useState({
      homeTeam: '',
      visitTeam: '',
      size: '',
      entry: ''
    })
    // console.log(user._id)
    function handleChange(evt) {
        setContent({...content, [evt.target.name]: evt.target.value });
        // setError('');
        
    }
    
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(content)
        handleAddBoard(content)
        // // Prevent form from being submitted to the server
        // evt.preventDefault();
        // try {
        //     // The promise returned by the signUp service method 
        //     // will resolve to the user object included in the
        //     // payload of the JSON Web Token (JWT)
        //     const user = await usersService.login(credentials);
        //     setUser(user);
        // } catch(err) {
        //     console.log(err);
        //     setError('Log In Failed - Try Again');
        // }
    }

    return(
        <div className="form-container">
          <form  onSubmit={handleSubmit}>
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
              <button type="submit">CREATE</button>
            </div>
          </form>
        </div>
    );
}