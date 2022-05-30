import React from "react";
import dialogPageReducer, {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogPageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                const onSendMessageClick = () => {
                    store.dispatch(addMessageActionCreator());
                }

                const onMessageChange = (text) => {
                    store.dispatch(
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
            }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer;


