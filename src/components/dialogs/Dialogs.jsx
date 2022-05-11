import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialogUser}>
            <NavLink className={({isActive}) => isActive ? `${s.dialogUserName} ${s.active}` : s.dialogUserName}
                     to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <p className={s.message}>{props.message}</p>
    )
}

const Dialogs = () => {

    let dialogData = [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Sasha'},
        {id: '3', name: 'Dasha'},
        {id: '4', name: 'Pasha'},
        {id: '5', name: 'Valera'},
        {id: '6', name: 'Sveta'}
    ]

    let messageData = [
        {id: '1', message: 'Hi'},
        {id: '1', message: 'How is your it-kamasutra?'},
        {id: '1', message: 'Yo'},
        {id: '1', message: 'Yo'},
        {id: '1', message: 'Yo'}
    ]

    return (
        <div className={s.dialogs}>
            <h2 className={s.dialogsTitle}>Dialogs</h2>
            <div className={s.dialogsContent}>
                <div className={s.dialogsItems}>
                    <DialogItem id={dialogData[0].id} name={dialogData[0].name}/>
                    <DialogItem id={dialogData[1].id} name={dialogData[1].name}/>

                </div>
                <div className={s.messages}>
                    <Message message={messageData[0].message}/>
                    <Message message={messageData[1].message}/>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;


