import "./navbar.css"
import Logo from "../../assets/logo-medium.png"

import {NavLink} from "react-router-dom";

export default function NavBar() {

    return (
        <div className="navbar">
            <img src={Logo} alt="BLOgventure" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/"
                                 className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/postoverview"
                                 className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        >
                            Alle Posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/createpost"
                                 className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        >
                            Niewe Post Maken
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}