import './App.css';
import './Reset.css';
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/setting/Setting";
import {Route, Routes} from "react-router-dom";
import Friends from "./components/friends/Friends";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NavBarContainer from "./components/navBar/NavBarContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReduser";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if(!this.props.initialized){
      return (
        <Preloader/>
      )
    }

    return (
      <div className={'wrapperMain'}>
        <HeaderContainer/>
        <NavBarContainer/>
        <main className={'contentMain'}>
          <Routes>
            <Route path='/profile' element={<ProfileContainer/>}/>
            <Route path='/profile/:userId'
                   element={<ProfileContainer/>}
            />
            <Route path='/dialogs/*'
                   element={<DialogsContainer
                     // stateDialogsPage={props.state.dialogsPage}
                     // dispatch={props.dispatch}
                   />}
            />
            <Route path='/news/*' element={<News/>}/>
            <Route path='/music/*' element={<Music/>}/>
            <Route path='/users/*' element={<UsersContainer/>}/>
            <Route path='/setting/*' element={<Setting/>}/>
            <Route path='/friends/*' element={<Friends/>}/>
            <Route path='/login/*' element={<Login/>}/>
          </Routes>
        </main>
      </div>
    );
  }
}

const mapStateTuProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateTuProps, {initializeApp}))(App);

