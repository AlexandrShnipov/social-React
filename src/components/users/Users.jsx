import React from "react";
import s from './Users.module.css'
import ContainerPage from "../../common/containerPage/ContainerPage";
import axios from "axios";
import userDefault from '../../assets/images/userDefault.png'


class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render = () => {
        return (
            <ContainerPage>
                <h2>Users</h2>
                {this.props.users.map(user =>
                    <div className={s.usersItem} key={user.id}>
                        <div className={s.usersItemLeft}>
                            <div className={s.usersItemLeftImg}>
                                <img src=
                                         {user.photos.small !== null
                                             ? user.photos.small
                                             : userDefault
                                         } alt="user photo"/>
                            </div>

                            <button className={s.usersItemLeftButton}
                                    onClick={() => {
                                        this.props.toggleFollow(user.id)
                                    }}>
                                {user.followed ? 'Unfollow' : 'Follow'}
                            </button>
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
}


export default Users;