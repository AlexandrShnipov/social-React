import React from "react";
import s from './NavBar.module.css';
import Friends from "./friends/Friends";
import NavBarItem from "./navBarItem/NavBarItem";
import StoreContext from "../../StoreContext";

const NavBar = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().navBar
                let navBarItem = state.item.map
                (item => <NavBarItem key={item.id} {...item}/>)

                return (
                    <nav className={s.nav}>
                        <ul className={s.navList}>
                            {navBarItem}
                            <Friends friends={state.friends}/>
                        </ul>
                    </nav>
                )
            }
            }

        </StoreContext.Consumer>

    )
}

export default NavBar