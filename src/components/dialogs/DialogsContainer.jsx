import React from "react";
import dialogPageReducer, {
  addMessageClick,
  updateNewMessageText
} from "../../redux/dialogPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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

export default compose (
  connect(mapStateToProps,{addMessageClick, updateNewMessageText}),
  withAuthRedirect
) (Dialogs);


