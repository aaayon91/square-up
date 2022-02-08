export default function NewOrderPage() {

    function handleChange(evt) {
        // setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        // setError('');
    }
    
    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await usersService.login(credentials);
            setUser(user);
        } catch(err) {
            console.log(err);
            setError('Log In Failed - Try Again');
        }
    }

    return(
        <div className="form-container" onSubmit={handleSubmit}>
          <form autoComplete="off" >
            <label>Email</label>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            <div className="btn-div">
              <button type="submit">LOG IN</button>
            </div>
          </form>
        </div>
    );
}