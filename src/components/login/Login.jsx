import React from "react";
import ContainerPage from "../../common/containerPage/ContainerPage";
import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {login} from "../../redux/authReducer";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Input}
        name={'email'}
        type="text"
        placeholder={'Enter your login'}
        validate={[required]}
      />
      <Field
        component={Input}
        name={'password'}
        type={'password'}
        placeholder={'Enter your password'}
        validate={[required]}
      />
      <label><Field component={'input'} name={'rememberMe'} type="checkbox"/>remember me</label>
      {
        props.error && <div className={s.formSummaryError}>
          {props.error}
        </div>
      }
      <button>login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

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