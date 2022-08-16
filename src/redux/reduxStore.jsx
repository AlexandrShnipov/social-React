import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMidleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./appReduser";


let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogPageReducer,
  navBar: navBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMidleware));
window.store = store;
export default store;


