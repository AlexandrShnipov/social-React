const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialStore = {
    dialogs: [
        {
            id: '1',
            name: 'Dima',
            photo: 'https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg'},
        {
            id: '2',
            name: 'Sasha',
            photo: 'https://preview.redd.it/eoaqok0btkwz.jpg?auto=webp&s=2b678aa0f24b7cc95ddd9648fd0582050182a496'
        },
        {
            id: '3',
            name: 'Dasha',
            photo: 'https://i.pinimg.com/originals/d2/b6/02/d2b602309654e552cdebaa58da93d2c9.jpg'
        },
        {
            id: '4',
            name: 'Pasha',
            photo: 'https://www.kino-teatr.ru/video/243/start.jpg'
        },
        {
            id: '5',
            name: 'Valera',
            photo: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2021/02/Avatar-Next-Shadow-2-1.jpg'
        },
        {
            id: '6',
            name: 'Sveta',
            photo: 'https://live.staticflickr.com/3815/10785443136_e549eceab6_b.jpg'
        },
        {
            id: '7',
            name: 'Lena',
            photo: 'https://talleesavage.files.wordpress.com/2010/05/avatar-2.jpg'
        },
    ],
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is your it-kamasutra?'},
        {id: '3', message: 'Yo'},
        {id: '4', message: 'Yo'},
        {id: '5', message: 'Yo'},
    ],
    addMessageText: '',
}

const dialogPageReducer = (state = initialStore, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: 8, message: state.addMessageText,
            };
           return {
                ...state,
                addMessageText: '',
                messages: [...state.messages, newMessage],
            }

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                addMessageText: action.newText
            };


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