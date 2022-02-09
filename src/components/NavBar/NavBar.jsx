import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser, form, formDisplayed}) {

    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }

    return (
        <nav className="navbar">
            {
            user ?
            <>
                <button className="nav-btn-2"><Link className="nav-link" to="/boards">JOIN A SQ</Link></button>
                <button className="nav-btn-2"><Link className="nav-link" to="/boards/new">START A SQ</Link></button>
                <span>Welcome, {user.name}</span>
                <button className="nav-btn-2"><Link className="nav-link" to="" onClick={handleLogOut} >LOG OUT</Link></button>
            </>
            : 
            <>
                <div>
                <h1 className="centered">SquareUp</h1>
                </div>
                {
                    form ?
                        <button className="nav-btn" onClick={formDisplayed}>SIGN UP</button>

                    :
                        <button className="nav-btn" onClick={formDisplayed}>LOG IN</button>
                }
            </>
            }
        </nav>
    )
}