import React from "react";
import ContainerPage from "../../common/containerPage/ContainerPage";
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={'input'} name={'login'} type="text" placeholder={'Enter your login'}/>
      <Field component={'input'} name={'password'} type="text" placeholder={'Enter your password'}/>
      <label><Field component={'input'} name={'remember me'} type="checkbox"/>remember me</label>
      <button>login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
}) (LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <ContainerPage>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit}/>
    </ContainerPage>
  )
}

export default Login;