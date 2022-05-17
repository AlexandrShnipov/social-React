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

const App = (props) => {

    return (
        <BrowserRouter>
            <div className={'wrapperMain'}>
                <Header/>
                <NavBar state={props.state}/>
                <main className={'contentMain'}>
                    <Routes>
                        <Route path='/profile/*'
                               element={<Profile state={props.state.profilePage}                              />}
                        />
                        <Route path='/dialogs/*'
                               element={<Dialogs state={props.state.dialogsPage}/>}
                        />
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/setting/*' element={<Setting/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
