import './App.css';
import './Reset.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/setting/Setting";
import {Route, Routes} from "react-router-dom";

import Friends from "./components/friends/Friends";
import DialogsContainer from "./components/dialogs/DialogsContainer";

const App = (props) => {

    return (
        <div className={'wrapperMain'}>
            <Header/>
            <NavBar />
            <main className={'contentMain'}>
                <Routes>
                    <Route path='/profile/*'
                           element={<Profile />}
                    />
                    <Route path='/dialogs/*'
                           element={<DialogsContainer
                               // stateDialogsPage={props.state.dialogsPage}
                               // dispatch={props.dispatch}
                           />}
                    />
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/setting/*' element={<Setting/>}/>
                    <Route path='/friends/*' element={<Friends/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
