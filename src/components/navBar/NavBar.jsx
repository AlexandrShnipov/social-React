import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.navList}>
                <li className={s.navListItem}>
                    <NavLink className={({isActive}) => isActive ? `${s.active} ${s.navListLink}` : s.navListLink}
                             to="/profile">Profile</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink className={({isActive}) => (isActive ? `${s.active} ${s.navListLink}` : s.navListLink)}
                             to="/dialogs">Messages</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink className={({isActive}) => (isActive ? `${s.active} ${s.navListLink}` : s.navListLink)}
                             to="/news">News</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink className={({isActive}) => (isActive ? `${s.active} ${s.navListLink}` : s.navListLink)}
                             to="/music">Music</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink className={({isActive}) => (isActive ? `${s.active} ${s.navListLink}` : s.navListLink)}
                             to="/setting">Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar