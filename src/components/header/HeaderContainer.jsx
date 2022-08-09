import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {authAPI} from "../../api/api";
class HeaderContainer extends React.Component {

  componentDidMount() {
    authAPI.getMe()
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