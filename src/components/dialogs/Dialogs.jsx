import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogs.map(dialog =>
        <DialogItem
            key={dialog.id}
            id={dialog.id}
            photo={dialog.photo}
            name={dialog.name}/>);
    let messageElements = state.messages.map(message =>
        <Message
            key={message.id}
            id={message.id}
            message={message.message}/>);

    const addMessageText =  state.addMessageText;

    const onSendMessageClick = () => {
        props.addMessageClick();
    }

    const onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <h2 className={s.dialogsTitle}>Messages</h2>
            <div className={s.dialogsContent}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    <div>
                        {messageElements}
                    </div>
                    <div className={s.newMessages}>
                        <textarea
                            className={s.newMessagesText}
                            placeholder={'Enter your message'}
                            onChange={onMessageChange}
                            value={addMessageText}/>
                        <button
                            className={s.newMessagesButton}
                            onClick={onSendMessageClick}>Send message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;


