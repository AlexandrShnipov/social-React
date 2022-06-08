import React from "react";
import s from './Users.module.css'
import ContainerPage from "../../common/containerPage/ContainerPage";


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: '1',
                    photoUrl: 'https://cdn.pixabay.com/photo/2021/06/04/10/28/portrait-6309448_960_720.jpg',
                    followed: false, fullName: 'Dmitry', status: 'I am a boss',
                    location:
                        {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: '2',
                    photoUrl: 'https://cdn.pixabay.com/photo/2021/06/04/10/28/portrait-6309448_960_720.jpg',
                    followed: true, fullName: 'Sasha', status: 'I am boss a too',
                    location:
                        {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: '3',
                    photoUrl: 'https://cdn.pixabay.com/photo/2021/06/04/10/28/portrait-6309448_960_720.jpg',
                    followed: false, fullName: 'Dmitry', status: 'I am boss a too',
                    location:
                        {city: 'Warsaw', country: 'Poland'}
                },
            ]
        )
    }


    let usersList = props.users.map(user =>
        <div className={s.usersItem} key={user.id}>
            <div className={s.usersItemLeft}>
                <div className={s.usersItemLeftImg}>
                    <img src={user.photoUrl} alt="user photo"/>
                </div>

                <button className={s.usersItemLeftButton} onClick={() => {
                    props.toggleFollow(user.id)
                }}>
                    {user.followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>

            <div className={s.usersItemRight}>
                <div className={s.usersItemRightTop}>
                    <p className={s.usersItemRightName}>{user.fullName}</p>
                    <p className={s.usersItemRightCity}>{user.location.city}</p>
                </div>
                <div className={s.usersItemRightBottom}>
                    <p className={s.usersItemRightStatus}>{user.status}</p>
                    <p className={s.usersItemRightCountry}>{user.location.country}</p>
                </div>
            </div>
        </div>
    )

    return (
        <ContainerPage>
            <h2>Users</h2>

            {usersList}

        </ContainerPage>
    )
}

export default Users;