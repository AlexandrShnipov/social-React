import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
  posts: [
    {id: '1', message: 'Hi, my friends', likesCount: '11',},
    {id: '2', message: `It's my first post`, likesCount: '25',},
  ],
  profile: null,
  status: '',
}

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: action.addPostText,
        likesCount: 0,
      };
      return {
        ...state,
        addPostText: '',
        posts: [...state.posts, newPost]
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };

    case DELETE_POST:

      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId)
      }

    default:
      return state;
  }
}

export default profilePageReducer;

export const addPost = (addPostText) => ({
  type: ADD_POST,
  addPostText
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const setUserProfile = (profile) =>
  ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data));
    })
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(data => {
      dispatch(setStatus(data));
    })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
}

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId
});