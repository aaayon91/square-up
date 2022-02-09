

export default function NewOrderPage({user, setUser, handleAddBoard}) {
    console.log(user._id)
    function handleChange(evt) {
        // setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        // setError('');
    }
    
    async function handleSubmit(evt) {
        evt.preventDefault();
        handleAddBoard({[evt.target.name]: evt.target.value})
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
        <div className="form-container" onSubmit={handleSubmit}>
          <form autoComplete="off" >
            <label>HOME TEAM:</label>
            <input type="text" name="homeTeam" onChange={handleChange} />
            <label>VISITING TEAM:</label>
            <input type="text" name="visitTeam" onChange={handleChange} />
            <label>BOARD SIZE:</label>
            <select name="size" style={{textAlign:"center"}} defaultValue={100}>
                <option value={25}>25 SQUARES</option>
                <option value={100}>100 SQUARES</option>
            </select>
            <label>ENTRY AMOUNT:</label>
            <input type="number" name="entry" onChange={handleChange} />
            <div className="btn-div">
              <button type="submit">LOG IN</button>
            </div>
          </form>
        </div>
    );
}