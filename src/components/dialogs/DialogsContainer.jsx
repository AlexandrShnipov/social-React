import React from "react";
import {addMessageClick} from "../../redux/dialogPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMessageClick: (newMessagesText) => dispatch(addMessageClick(newMessagesText)),
//         }
// }

// export default compose (
//   connect(mapStateToProps,{addMessageClick, updateNewMessageText}),
//   withAuthRedirect
// ) (Dialogs);

export default compose (
  connect(mapStateToProps, {addMessageClick}),
  withAuthRedirect
) (Dialogs);


