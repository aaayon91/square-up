import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser, form, setForm}) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav className="navbar">
            {
            user ?
            <>
                {/* <h1>Welcome, {user.name}</h1> */}
                <button className="nav-btn-2"><Link className="nav-link" to="/boards">JOIN A SQ</Link></button>
                <button className="nav-btn-2"><Link className="nav-link" to="/boards/new">START A SQ</Link></button>
                <button className="nav-btn-2"><Link className="nav-link" to="" onClick={handleLogOut} >LOG OUT</Link></button>
            </>
            : 
            <>
                {
                    form ?
                        <button className="nav-btn" onClick={() => setForm(false)}>SIGN UP</button>

                    :
                        <button className="nav-btn" onClick={() => setForm(true)}>LOG IN</button>
                }
            </>
            }
        </nav>
    )
}