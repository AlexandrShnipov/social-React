const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialStore = {
    posts: [
        {id: '1', message: 'Hi, my friends', likesCount: '11',},
        {id: '2', message: `It's my first post`, likesCount: '25',},
    ],
    addPostText: 'IT-Kamasutra.com',
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