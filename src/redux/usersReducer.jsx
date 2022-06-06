const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const STATE_USERS = 'STATE_USERS';

let initialStore = {
    users: [
        // {id: '1', followed: false, fullName: 'Dmitry', status: 'I am boss', location:
        //         {city: 'Minsk', country: 'Belarus'}},
        // {id: '2', followed: true, fullName: 'Sasha', status: 'I am boss too', location:
        //         {city: 'Kiev', country: 'Ukraine'}},
        // {id: '1', followed: false, fullName: 'Dmitry', status: 'I am boss too', location:
        //         {city: 'Warsaw', country: 'Poland'}},
    ],

}

const usersReducer = (state = initialStore, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID) {
                        return{...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID) {
                        return{...user, followed: false}
                    }
                    return user;
                })
            }

        case STATE_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export default usersReducer;

export const followAC = (userID) => ({
    type: FOLLOW,
    userID
});

export const unfollowAC = (userID) => ({
    type: UNFOLLOW,
    userID

});

export const setUsersAC = (users) => ({
    type: STATE_USERS,
    users

});