import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'
import {MdMenu, MdClose} from 'react-icons/md'
import {IoMdSettings} from 'react-icons/io'
import NavLinks from "./NavLinks"
import { useState } from "react"
import NavSettings from "./NavSettings"

export default function NavBar({user, setUser, form, setForm}) {
    const [open, setOpen] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    const burger = <MdMenu className="react-icon" size='80%' onClick={toggleBurgerMenu}/>
    const settings = <IoMdSettings className="react-icon" size='80%' onClick={toggleSettingsMenu}/>
    const closeBurger = <MdClose className="react-icon" size='80%' onClick={toggleBurgerMenu}/>
    const closeSettings = <MdClose className="react-icon" size='80%' onClick={toggleSettingsMenu}/>

    function toggleBurgerMenu() {
        if (openSettings) {
            toggleSettingsMenu();
        };
        setOpen(!open)
    }

    function toggleSettingsMenu() {
        if (open) {
            toggleBurgerMenu();
        };
        setOpenSettings(!openSettings)
    }

    return (
        <nav className="navbar">
            {
            user ?
            <>
                {open ? closeBurger : burger}
                {open && <NavLinks className='nav-links' toggleBurgerMenu={toggleBurgerMenu}/>}
                <h1>SquareUp</h1>
                {openSettings ? closeSettings : settings}
                {openSettings && <NavSettings className='nav-settings' setUser={setUser} toggleSettingsMenu={toggleSettingsMenu}/>}
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