import {combineReducers, compose, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import navBarReducer from "./navBarReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogPageReducer,
    navBar: navBarReducer,
});

let store = createStore(reducers);
export default store;

