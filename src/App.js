import './App.css';
import './Reset.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

const App = () => {
    return (
        <div className={'wrapperMain'}>
            <Header/>
            <NavBar/>
            <main className={'contentMain'}>
                {/*<Profile/>*/}
                <Dialogs />
            </main>

        </div>
    );
}

export default App;
