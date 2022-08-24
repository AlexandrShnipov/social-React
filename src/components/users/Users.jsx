import React from "react";
import ContainerPage from "../../common/containerPage/ContainerPage";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {

  let {currentPage, pageSize, totalUsersCount, users, onPageChanged, followingInProgress, follow, unfollow} = props;

  return (
    <ContainerPage>
      <h2>Users</h2>
      <Paginator currentPage={currentPage}
                 pageSize={pageSize}
                 totalUsersCount={totalUsersCount}
                 onPageChanged={onPageChanged}/>
      {users.map(user => <User user={user}
                               key={user.id}
                               followingInProgress={followingInProgress}
                               user={user}
                               follow={follow}
                               unfollow={unfollow}/>)
      }
    </ContainerPage>
  )
}

export default Users;