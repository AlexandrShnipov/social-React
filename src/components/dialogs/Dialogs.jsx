import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogsItem";
import Message from "./message/Message";


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


