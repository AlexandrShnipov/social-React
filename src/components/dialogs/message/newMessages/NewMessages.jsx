import React from "react";
import s from './NewMessages.module.css'
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../../../redux/dialogPageReducer";

const NewMessages = (props) => {

    const onSendMessageClick = () => {
        props.dispatch(addMessageActionCreator());
    }

    const onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    const addMessageText = props.addMessageText;

    return (
        <div className={s.newMessages}>
            <textarea
                className={s.newMessagesText}
                placeholder={'Enter your message'}
                onChange={onMessageChange}
                value={addMessageText}/>
            <button className={s.newMessagesButton} onClick={onSendMessageClick}>Send message</button>
        </div>
    )
}

export default NewMessages;