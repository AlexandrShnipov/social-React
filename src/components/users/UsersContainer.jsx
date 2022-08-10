import React from "react";
import {connect} from "react-redux";
import {
  unfollowSuccess,
  getUsers,
  toggleFollowingProgress, unfollow, follow, setCurrentPage,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    let {currentPage, pageSize, getUsers} = this.props
    getUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => {
    let {pageSize, currentPage, getUsers} = this.props
    getUsers(pageNumber, pageSize, currentPage)
  }

  render = () => {
    let {
      currentPage, pageSize,
      totalUsersCount, users,
      follow, unfollow,
      isFetching,
      followingInProgress
    } = this.props;
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
               followingInProgress={followingInProgress}
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
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, getUsers
  })
(UsersContainer);
