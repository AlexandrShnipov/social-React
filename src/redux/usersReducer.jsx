const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const STATE_USERS = 'STATE_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialStore = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
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
        case STATE_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
            case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
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
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const setTotalUsersCountAC = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
});