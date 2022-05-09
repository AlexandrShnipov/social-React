import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <a className={s.headerLogoLink} href="">
                <img className={s.headerLogoImg}
                     src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="logo"/>
            </a>
        </header>
    )
}

export default Header