import React from "react";
import {connect} from "react-redux";
import {
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  follow,
  unfollow
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    let {currentPage, pageSize, setUsers, setTotalUsersCount, toggleIsFetching} = this.props;
    toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        toggleIsFetching(false);
        setUsers(response.data.items);
        setTotalUsersCount(response.data.totalCount);
      })
  }

  onPageChanged = (pageNumber) => {
    let {pageSize, setUsers, setCurrentPage, toggleIsFetching} = this.props;
    setCurrentPage(pageNumber);
    toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`)
      .then(response => {
        toggleIsFetching(false);
        setUsers(response.data.items);
      })
  }

  render = () => {
    let {currentPage, pageSize, totalUsersCount, users, follow, unfollow, isFetching} = this.props;
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
        />
      </>


    )
  }
}

let mapStateToProps = (state) => {
  let {users, pageSize, totalUsersCount, currentPage, isFetching} = state.usersPage
  return {
    users: users,
    pageSize: pageSize,
    totalUsersCount: totalUsersCount,
    currentPage: currentPage,
    isFetching: isFetching,
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
    toggleIsFetching
  })
(UsersContainer);
