import React from "react";
import s from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.navList}>
                <li className={s.navListItem}>
                    <a className={s.navListLink} href="#">Profile</a>
                </li>
                <li className={s.navListItem}>
                    <a className={`${s.navListLink} ${s.active}`} href="#">Messages</a>
                </li>
                <li className={s.navListItem}>
                    <a className={s.navListLink} href="#">News</a>
                </li>
                <li className={s.navListItem}>
                    <a className={s.navListLink} href="#">Music</a>
                </li>
                <li className={s.navListItem}>
                    <a className={s.navListLink} href="#">Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar