import './App.css';
import './Reset.css';
import {Route, Routes} from "react-router-dom";
import NavBarContainer from "./components/navBar/NavBarContainer";
import UsersContainer from "./components/users/UsersContainer";
import {withRouter} from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReduser";
import Preloader from "./components/Common/Preloader/Preloader";
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/news/News'));
const Music = React.lazy(() => import('./components/music/Music'));
const Setting = React.lazy(() => import('./components/setting/Setting'));
const Friends = React.lazy(() => import('./components/friends/Friends'));
const Login = React.lazy(() => import('./components/login/Login'));

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
          <React.Suspense fallback={<Preloader/>}>
            <Routes>
              <Route path='/profile' element={<ProfileContainer/>}/>
              <Route path='/profile/:userId'
                     element={<ProfileContainer/>}
              />
              <Route path='/dialogs/*'
                     element={ <DialogsContainer/>}
              />
              <Route path='/news/*' element={<News/>}/>
              <Route path='/music/*' element={<Music/>}/>
              <Route path='/users/*' element={<UsersContainer/>}/>
              <Route path='/setting/*' element={<Setting/>}/>
              <Route path='/friends/*' element={<Friends/>}/>
              <Route path='/login/*' element={<Login/>}/>
            </Routes>
          </React.Suspense>

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

