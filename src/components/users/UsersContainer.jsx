import React from "react";
import {connect} from "react-redux";
import {
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  follow,
  unfollow, toggleFollowingProgress, getUsersThunkCreator
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

  componentDidMount() {
    let {currentPage, pageSize, getUsers} = this.props
    getUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => {
    let {pageSize, getUsers} = this.props
    getUsers(pageNumber, pageSize)
  }

  render = () => {
    let {currentPage, pageSize,
      totalUsersCount, users,
      follow, unfollow,
      isFetching, toggleFollowingProgress,
      followingInProgress} = this.props;
    return (
      <>
        {isFetching
          ? <Preloader/>
          : null}
        <Users currentPage={currentPage}
               pageSize={pageSize}
               totalUsersCount={totalUsersCount}
               users={users}
               onPageChanged={this.onPageChanged}
               follow={follow}
               unfollow={unfollow}
               toggleFollowingProgress={toggleFollowingProgress}
               followingInProgress= {followingInProgress}
        />
      </>


    )
  }
}

let mapStateToProps = (state) => {
  let {users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress} = state.usersPage
  return {
    users: users,
    pageSize: pageSize,
    totalUsersCount: totalUsersCount,
    currentPage: currentPage,
    isFetching: isFetching,
    followingInProgress: followingInProgress,
  }

};


export default connect(mapStateToProps,
  {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount,
    toggleIsFetching, toggleFollowingProgress,
    getUsers: getUsersThunkCreator,
  })
(UsersContainer);
