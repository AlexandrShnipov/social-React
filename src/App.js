import './App.css';
import './Reset.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";

const App = () => {
    return (
        <div className={'wrapper--main'}>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}

export default App;
