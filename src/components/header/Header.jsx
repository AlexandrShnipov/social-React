import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.headerWrap}>
        <a className={s.headerLogoLink} href="">
          <img className={s.headerLogoImg}
               src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="logo"/>
        </a>

        <div>
          {props.isAuth
            ? <div className={s.loginBlock}>
              {props.login}
              <button onClick={props.logout}>Log out</button>
            </div>
            : <NavLink className={s.setLoginLink} to={'/login'}>login</NavLink>}
        </div>
      </div>

    </header>
  )
}

export default Header