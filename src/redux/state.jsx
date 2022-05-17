let state = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, my friends', likesCount: '11'},
            {id: '2', message: `It's my first post`, likesCount: '25'},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Dima'},
            {id: '2', name: 'Sasha'},
            {id: '3', name: 'Dasha'},
            {id: '4', name: 'Pasha'},
            {id: '5', name: 'Valera'},
            {id: '6', name: 'Sveta'},
            {id: '7', name: 'Lena'},
        ],
        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'How is your it-kamasutra?'},
            {id: '3', message: 'Yo'},
            {id: '4', message: 'Yo'},
            {id: '5', message: 'Yo'},
        ]
    },
    friendsNavBar: [
        {id: '1', name: 'Andrey', photo: 'https://moika78.ru/news2/2020/08/Avatar.jpg'},
        {id: '2', name: 'Sasha', photo: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14.jpeg?m6aZMJ2FuRNdIJhw9MbIpcGgJvY3yzW6&size=770:433'},
        {id: '3', name: 'Sveta', photo: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3'},
    ]
}

export default state;
// console.log(state.profilePage.dialogs[1].name)