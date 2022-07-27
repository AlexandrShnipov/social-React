import './App.css';
import './Reset.css';
import Header from "./components/header/Header";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/setting/Setting";
import {Route, Routes} from "react-router-dom";

import Friends from "./components/friends/Friends";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NavBarContainer from "./components/navBar/NavBarContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

const App = (props) => {

    return (
        <div className={'wrapperMain'}>
            <Header/>
            <NavBarContainer/>
            <main className={'contentMain'}>
                <Routes>
                  <Route path='/profile' element={<ProfileContainer />} />
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
                </Routes>
            </main>
        </div>
    );
}

export default App;
