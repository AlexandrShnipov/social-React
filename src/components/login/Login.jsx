import React from "react";
import ContainerPage from "../../common/containerPage/ContainerPage";
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {login} from "../../redux/authReducer";

const LoginForm = (props) => {
  const submitLogin = (e) => {
    e.preventDefault();
    props.handleSubmit();
  }

  return (
    <form onSubmit={submitLogin}>
      {createField(
        Input, 'email', 'email', 'Enter your email', [required])
      }
      {createField(
        Input, 'password', 'password', 'Enter your password', [required])
      }

      <label>
        {createField('input', 'rememberMe', 'checkbox', null, [], 'remember me')}
      </label>
      {props.error && <div className={s.formSummaryError}>
        {props.error}</div>}
      <button type={"submit"}>login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData)
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return (
      <Navigate to={'/profile'}/>
    )
  }

  return (
    <ContainerPage>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit}/>
    </ContainerPage>
  )
}

const mapStateToPops = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToPops, {login})(Login);