const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.addPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.addPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.addPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export default profilePageReducer;

export const addPostActionCreator = () => ({
    type: ADD_POST,
});

export const updateNewPOstTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});