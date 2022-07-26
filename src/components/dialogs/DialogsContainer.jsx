import React from "react";
import dialogPageReducer, {
    addMessageClick,
    updateNewMessageText
} from "../../redux/dialogPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMessageClick: () => dispatch(addMessageActionCreator()),
//         updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text))
//     }
// }

const DialogsContainer = connect(mapStateToProps,
  {addMessageClick, updateNewMessageText})(Dialogs);

export default DialogsContainer;


