import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

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

  const addMessageText = state.addMessageText;

  const addNewMessage = (values) => {
    //debugger
    //alert(values.newMessagesText)
    props.addMessageClick(values.newMessagesText)
  }

  if (!props.isAuth) {
    return <Navigate to={'/login'}/>
  }
  ;

  return (
    <div className={s.dialogs}>
      <h2 className={s.dialogsTitle}>Dialogs</h2>
      <div className={s.dialogsContent}>
        <div className={s.dialogsItems}>
          {dialogElements}
        </div>
        <div className={s.messages}>
          <div>
            {messageElements}
          </div>
        </div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form className={s.newMessages} onSubmit={props.handleSubmit}>
      <Field component={'textarea'}
             className={s.newMessagesText}
             name={'newMessagesText'}
             placeholder={'Enter your message'}/>
      <button className={s.newMessagesButton}>Send message</button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;


