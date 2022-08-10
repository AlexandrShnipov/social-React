import React from "react";
import dialogPageReducer, {
  addMessageClick,
  updateNewMessageText
} from "../../redux/dialogPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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

export default withAuthRedirect(connect(mapStateToProps,
  {addMessageClick, updateNewMessageText})(Dialogs));



