import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    let dialogElement = props.state.dialogs.map(dialog =>
        <DialogItem key={dialog.id} id={dialog.id} photo={dialog.photo} name={dialog.name}/>);
    let messageElement = props.state.messages.map(messages =>
        <Message key={messages.id} id={messages.id} message={messages.message}/>);

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


