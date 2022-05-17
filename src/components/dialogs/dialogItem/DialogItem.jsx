import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialogUser}>
            <img className={s.dialogUserPhoto} src={props.photo} alt="photo"/>
            <NavLink className={({isActive}) => isActive ? `${s.dialogUserName} ${s.active}` : s.dialogUserName}
                     to={path}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem;


