import React from "react";
import s from './Users.module.css'
import userDefault from '../../assets/images/userDefault.png'
import ContainerPage from "../../common/containerPage/ContainerPage";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";

const Users = (props) => {

  let {currentPage, pageSize, totalUsersCount, users, onPageChanged} = props;

  return (
    <ContainerPage>
      <h2>Users</h2>
      <Paginator currentPage={currentPage} pageSize={pageSize} totalUsersCount={totalUsersCount}
                 onPageChanged={onPageChanged}/>
      {users.map(user =>
        <div className={s.usersItem} key={user.id}>
          <div className={s.usersItemLeft}>
            <NavLink to={`/profile/${user.id}`}>
              <div className={s.usersItemLeftImg}>
                <img src=
                       {user.photos.small !== null
                         ? user.photos.small
                         : userDefault
                       } alt="user photo"/>
              </div>
            </NavLink>
            {user.followed
              ? <button
                className={s.usersItemLeftButton}
                disabled={props.followingInProgress.some(id => id === user.id)}
                onClick={() => {
                  props.unfollow(user.id)
                }}>
                Unfollow
              </button>
              : <button
                disabled={props.followingInProgress.some(id => id === user.id)}
                className={s.usersItemLeftButton}
                onClick={() => {
                  props.follow(user.id)
                }}>
                Follow
              </button>}
          </div>

          <div className={s.usersItemRight}>
            <div className={s.usersItemRightTop}>
              <p className={s.usersItemRightName}>{user.name}</p>
              <p className={s.usersItemRightCity}>{'user.location.city'}</p>
            </div>
            <div className={s.usersItemRightBottom}>
              <p className={s.usersItemRightStatus}>{user.status}</p>
              <p className={s.usersItemRightCountry}>{'user.location.country'}</p>
            </div>
          </div>
        </div>
      )
      }
    </ContainerPage>
  )
}

export default Users;