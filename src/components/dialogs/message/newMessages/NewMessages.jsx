import React from "react";
import s from './NewMessages.module.css'

const NewMessages = (props) => {

    let newMessageElement = React.createRef();
    const addMessage = () => {
        props.addMessage();
    }

    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);

    }

    return (
        <div className={s.newMessages}>
            <textarea
                className={s.newMessagesText}
                onChange={onMessageChange}
                ref={newMessageElement}
                value={props.addMessageText}/>
            <button className={s.newMessagesButton} onClick={addMessage}>Send message</button>
        </div>
    )
}

export default NewMessages;