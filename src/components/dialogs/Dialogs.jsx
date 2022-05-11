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

    let dialogs = [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Sasha'},
        {id: '3', name: 'Dasha'},
        {id: '4', name: 'Pasha'},
        {id: '5', name: 'Valera'},
        {id: '6', name: 'Sveta'},
        {id: '7', name: 'Lena'}
    ]

    let messages = [
        {id: '1', message: 'Hi'},
        {id: '1', message: 'How is your it-kamasutra?'},
        {id: '1', message: 'Yo'},
        {id: '1', message: 'Yo'},
        {id: '1', message: 'Yo'}
    ]

    let dialogElement = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messageElement = messages.map(message =>  <Message message={message.message}/>);

        return (
        <div className={s.dialogs}>
            <h2 className={s.dialogsTitle}>Dialogs</h2>
            <div className={s.dialogsContent}>
                <div className={s.dialogsItems}>
                    {dialogElement}
                </div>
                <div className={s.messages}>
                    {messageElement}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;


