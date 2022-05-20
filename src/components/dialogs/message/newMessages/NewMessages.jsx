import React from "react";
import s from './NewMessages.module.css'

const NewMessages = () => {

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }


    return (
        <div className={s.newMessages}>
            <textarea className={s.newMessagesText} ref={newMessageElement}></textarea>
            <button className={s.newMessagesButton} onClick={addMessage}>Send message</button>
        </div>
    )
}

export default NewMessages;