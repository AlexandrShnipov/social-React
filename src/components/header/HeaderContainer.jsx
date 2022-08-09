import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setUserData} from "../../redux/authReducer";
import {loginAPI} from "../../api/api";
class HeaderContainer extends React.Component {

  componentDidMount() {
    loginAPI.getLogin()
      .then(data => {
     //debugger
        if(data.resultCode === 0){
          let {id, login, email} = data.data;
          this.props.setAuthUserData(id, login, email);
        }
      })
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }

}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);