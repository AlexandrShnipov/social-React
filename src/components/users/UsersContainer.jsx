import React from "react";
import {connect} from "react-redux";
import {setUsersAC, toggleFollowAC} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userID) => {
            dispatch(toggleFollowAC(userID))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }

}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;