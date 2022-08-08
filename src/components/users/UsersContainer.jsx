import React from "react";
import {connect} from "react-redux";
import {
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  follow,
  unfollow, toggleFollowingProgress
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

  componentDidMount() {
    let {currentPage, pageSize, setUsers, setTotalUsersCount, toggleIsFetching} = this.props;
    toggleIsFetching(true);
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        toggleIsFetching(false);
        setUsers(data.items);
        setTotalUsersCount(data.totalCount);
      })
  }

  onPageChanged = (pageNumber) => {
    let {pageSize, setUsers, setCurrentPage, toggleIsFetching} = this.props;
    setCurrentPage(pageNumber);
    toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, pageSize)
      .then(data => {
        toggleIsFetching(false);
        setUsers(data.items);
      })
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

// let mapDispatchToProps = (dispatch) => {
//     return {
//         toggleFollow: (userID) => {
//             dispatch(toggleFollowAC(userID))
//         },
//
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps,
  {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount,
    toggleIsFetching, toggleFollowingProgress
  })
(UsersContainer);
