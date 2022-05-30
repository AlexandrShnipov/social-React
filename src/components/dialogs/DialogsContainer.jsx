import React from "react";
import dialogPageReducer, {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogPageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    const onMessageChange = (text) => {
        props.store.dispatch(
            updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs
            dialogsPage={state}
            addMessageClick={onSendMessageClick}
            updateNewMessageText={onMessageChange}
        />
    )
}

export default DialogsContainer;


