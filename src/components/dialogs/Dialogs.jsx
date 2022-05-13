import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogsItem";
import Message from "./message/Message";


const Dialogs = (props) => {

    let dialogElement = props.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>);
    let messageElement = props.messages.map(message => <Message key={message.id} id={message.id} message={message.message}/>);

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


