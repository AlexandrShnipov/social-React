const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialStore = {
    posts: [
        {id: '1', message: 'Hi, my friends', likesCount: '11',},
        {id: '2', message: `It's my first post`, likesCount: '25',},
    ],
    addPostText: 'IT-Kamasutra.com',
  profile: null,
}

const profilePageReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.addPostText,
                likesCount: 0,
            };
           return {
               ...state,
               addPostText: '',
               posts: [...state.posts, newPost]
           };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                addPostText: action.newText
            };

      case SET_USER_PROFILE:
        return  {
          ...state,
          profile: action.profile
        }

        default:
            return state;
    }
}

export default profilePageReducer;

export const addPost = () => ({
    type: ADD_POST,
});

export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const setUserProfile = (profile) =>
  ({type: SET_USER_PROFILE, profile})