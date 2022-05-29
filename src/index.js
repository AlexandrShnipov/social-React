import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/reduxStore";
import {logDOM} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {
       root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                    // addPost={store.addPost.bind(store)}
                    // updateNewPostText={store.updateNewPostText.bind(store)}
                    // addMessage={store.addMessage.bind(store)}
                    // updateNewMessageText={store.updateNewMessageText.bind(store)}
                />
            </BrowserRouter>

        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree (state);
}, console.log('in store something has changed'));




