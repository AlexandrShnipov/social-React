const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const STATE_USERS = 'STATE_USERS';

let initialStore = {
    users: []
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