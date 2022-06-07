import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import Users from "./Users";

let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }

};

let MapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }

}

const UsersContainer = connect (MapStateToProps, MapDispatchToProps) (Users);
export default UsersContainer;