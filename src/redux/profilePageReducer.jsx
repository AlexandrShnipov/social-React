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
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.addPostText,
                likesCount: 0,
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.addPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.addPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default profilePageReducer;

export const addPostActionCreator = () => ({
    type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});