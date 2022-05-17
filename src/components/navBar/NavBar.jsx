import React from "react";
import s from './NavBar.module.css';
import Friends from "./friends/Friends";
import NavBarItem from "./navBarItem/NavBarItem";

const NavBar = (props) => {

    let navBarItem = props.state.item.map(item => <NavBarItem key= {item.id} {...item}/>)

    return (
        <nav className={s.nav}>
            <ul className={s.navList}>
                {navBarItem}
               <Friends friends={ props.state.friends }/>
            </ul>
        </nav>
    )
}

export default NavBar