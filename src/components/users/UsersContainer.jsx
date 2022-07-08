import React from "react";
import {connect} from "react-redux";
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFollowAC} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize, setUsers, setTotalUsersCount} = this.props;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items);
                setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        let {pageSize, setUsers, setCurrentPage} = this.props;
        setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items);
            })
    }

    render = () => {
        let {currentPage, pageSize, totalUsersCount, users, toggleFollow} = this.props;
        return (
            <Users currentPage={currentPage}
                   pageSize={pageSize}
                   totalUsersCount={totalUsersCount}
                   users={users}
                   onPageChanged={this.onPageChanged}
                   toggleFollow={toggleFollow}
            />

        )
    }
}

let mapStateToProps = (state) => {
    let {users, pageSize, totalUsersCount, currentPage} = state.usersPage
    return {
        users: users,
        pageSize: pageSize,
        totalUsersCount: totalUsersCount,
        currentPage: currentPage,
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
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
