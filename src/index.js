import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from './redux/state';
import state from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>
    );
}

renderEntireTree(state);
subscribe(renderEntireTree);




