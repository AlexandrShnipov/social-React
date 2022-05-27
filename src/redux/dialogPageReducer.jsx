const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 8, message: state.addMessageText,
            };
            state.messages.push(newMessage);
            state.addMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.addMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export default dialogPageReducer;

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
})