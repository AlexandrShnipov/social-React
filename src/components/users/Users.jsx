import React from "react";
import s from './Users.module.css'
import userDefault from '../../assets/images/userDefault.png'
import ContainerPage from "../../common/containerPage/ContainerPage";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {

    let {currentPage, pageSize, totalUsersCount, users, follow, unfollow, onPageChanged} = props;

    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <ContainerPage>
            <h2>Users</h2>
            <div className={s.paginationWrap}>
                {pages.map(page => {

                        return (
                            <span key={page}
                                  className={currentPage === page ? s.selectedPage : ''}
                                  onClick={(e) => {
                                      onPageChanged(page)
                                  }}>
                            {page}
                        </span>
                        )
                    }
                )
                }
            </div>
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
                          onClick={()=>{
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                              {withCredentials: true,
                              headers: {
                                'API-KEY': 'edddb9f8-9da9-4002-9492-6a4e0e1684d9'
                              }
                              })
                              .then(response => {
                                //debugger
                                if(response.data.resultCode === 0){
                                  unfollow(user.id) ;
                                }
                              })
                          }}>Unfollow
                      </button>
                      : <button
                          className={s.usersItemLeftButton}
                          onClick={()=>{
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                              {},{withCredentials: true,
                                headers: {
                                  'API-KEY': 'edddb9f8-9da9-4002-9492-6a4e0e1684d9'
                                }
                            })
                              .then(response => {
                                //debugger
                                if(response.data.resultCode === 0){
                                  follow(user.id) ;
                                }
                              })
                          }}>Follow
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