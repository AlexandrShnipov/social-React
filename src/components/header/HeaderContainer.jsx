import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserdata} from "../../redux/authReducer";
class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthUserdata();
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

export default connect (mapStateToProps, {getAuthUserdata}) (HeaderContainer);