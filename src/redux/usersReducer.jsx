const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const STATE_USERS = 'STATE_USERS';

let initialStore = {
    users: []
}

const usersReducer = (state = initialStore, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            }
        //
        case STATE_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        default:
            return state;
    }
}

export default usersReducer;

export const toggleFollowAC = (userID) => ({
    type: TOGGLE_FOLLOW,
    userID
});

export const setUsersAC = (users) => ({
    type: STATE_USERS,
    users

});