import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import NewMessages from "./message/newMessages/NewMessages";

const Dialogs = (props) => {

    let dialogElement = props.stateDialogsPage.dialogs.map(dialog =>
        <DialogItem
            key={dialog.id}
            id={dialog.id}
            photo={dialog.photo}
            name={dialog.name}/>);
    let messageElement = props.stateDialogsPage.messages.map(message =>
        <Message
            key={message.id}
            id={message.id}
            message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <h2 className={s.dialogsTitle}>Messages</h2>
            <div className={s.dialogsContent}>
                <div className={s.dialogsItems}>
                    {dialogElement}
                </div>
                <div className={s.messages}>
                    <div>
                        {messageElement}
                    </div>
                    <NewMessages
                        addMessage={props.addMessage}
                        updateNewMessageText={props.updateNewMessageText}
                        addMessageText={props.stateDialogsPage.addMessageText}
                    />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;


