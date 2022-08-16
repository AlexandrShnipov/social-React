import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let initialStore = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: {userId, login, email, isAuth}
});

export const getAuthUserdata = () => (dispatch) => {
  return authAPI.getMe()
    .then(data => {
      //debugger
      if(data.resultCode === 0){
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email, true));
      }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {

  authAPI.login(email, password, rememberMe)
    .then(data => {
      //debugger
      if(data.resultCode === 0){
        dispatch(getAuthUserdata());
      } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
      }
    })
}

export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(data => {
      //debugger
      if(data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
}

export default authReducer;