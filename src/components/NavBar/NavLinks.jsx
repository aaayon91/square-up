import { Link } from "react-router-dom"

export default function NavLinks(toggleBurgerMenu) {
    return (
        <div className="nav-list">
            <Link className="nav-link" to="/boards" onClick={toggleBurgerMenu}>JOIN A SQ</Link>
            <Link className="nav-link" to="/boards/new" onClick={toggleBurgerMenu}>START A SQ</Link>
            {/* <button className="nav-btn-2"><Link className="nav-link" to="" onClick={handleLogOut} >LOG OUT</Link></button> */}
        </div>
    );
}