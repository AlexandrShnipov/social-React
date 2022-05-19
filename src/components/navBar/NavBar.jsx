import React from "react";
import s from './NavBar.module.css';
import Friends from "./friends/Friends";
import NavBarItem from "./navBarItem/NavBarItem";

const NavBar = (props) => {

    let navBarItem = props.stateNavBar.item.map(item => <NavBarItem key= {item.id} {...item}/>)

    return (
        <nav className={s.nav}>
            <ul className={s.navList}>
                {navBarItem}
               <Friends friends={ props.stateNavBar.friends }/>
            </ul>
        </nav>
    )
}

export default NavBar