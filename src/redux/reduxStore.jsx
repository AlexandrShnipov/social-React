import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogPageReducer,
    navBar: navBarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);
export default store;


