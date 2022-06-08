import React from "react";
import {connect} from "react-redux";
import {setUsersAC, toggleFollowAC} from "../../redux/usersReducer";
import Users from "./Users";

let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }

};

let MapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userID) => {
            dispatch(toggleFollowAC(userID))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }

}

const UsersContainer = connect (MapStateToProps, MapDispatchToProps) (Users);
export default UsersContainer;