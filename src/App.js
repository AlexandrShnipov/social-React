import './App.css';
import './Reset.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/setting/Setting";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dialogs from "./components/dialogs/Dialogs";
import Friends from "./components/friends/Friends";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className={'wrapperMain'}>
                <Header/>
                <NavBar stateNavBar={props.state.navBar}/>
                <main className={'contentMain'}>
                    <Routes>
                        <Route path='/profile/*'
                               element={<Profile
                                   stateProfile={props.state.profilePage}
                                   addPost={props.addPost}
                               />}
                        />
                        <Route path='/dialogs/*'
                               element={<Dialogs stateDialogs={props.state.dialogsPage}/>}
                        />
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/setting/*' element={<Setting/>}/>
                        <Route path='/friends/*' element={<Friends/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
