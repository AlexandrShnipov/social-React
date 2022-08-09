import {authAPI} from "../api/api";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
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
        ...action.data,
        isAuth: true,
      }
    default:
      return state;
  }
}

export const setAuthUserData = (userId, login, email) => ({
  type: SET_USER_DATA,
  data: {userId, login, email}
});

export const getAuthUserdata = () => (dispatch) => {
  authAPI.getMe()
    .then(data => {
      //debugger
      if(data.resultCode === 0){
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email));
      }
    })
}

export default authReducer;