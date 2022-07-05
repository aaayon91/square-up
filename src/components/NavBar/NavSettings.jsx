import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'

export default function NavSettings(setUser, toggleSettingMenu) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <div className="nav-settings">
            <Link className="nav-link" to="" onClick={handleLogOut} >LOG OUT</Link>
        </div>
    );
}