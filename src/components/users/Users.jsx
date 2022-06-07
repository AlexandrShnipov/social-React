import React from "react";
import ContainerPage from "../../common/containerPage/ContainerPage";
import {findAllByDisplayValue} from "@testing-library/react";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: '1',
                    photoUrl: 'https://www.film.ru/sites/default/files/styles/thumb_260x320/public/people/1459203-2174896.jpg',
                    followed: false, fullName: 'Dmitry', status: 'I am boss',
                    location:
                        {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: '2',
                    photoUrl: 'https://www.film.ru/sites/default/files/styles/thumb_260x320/public/people/1459203-2174896.jpg',
                    followed: true, fullName: 'Sasha', status: 'I am boss too',
                    location:
                        {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: '3',
                    photoUrl: 'https://www.film.ru/sites/default/files/styles/thumb_260x320/public/people/1459203-2174896.jpg',
                    followed: false, fullName: 'Dmitry', status: 'I am boss too',
                    location:
                        {city: 'Warsaw', country: 'Poland'}
                },
            ]
        )
    }


    let usersList = props.users.map(user =>
        <div key={user.id}>
            <div>
                <img src={user.photoUrl} alt="user photo"/>
                {user.followed
                    ? <button onClick={() => {
                        props.unFollow(user.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(user.id)
                    }}>Follow</button>
                }
            </div>

            <div>
                <div>
                    <p>{user.fullName}</p>
                    <p>{user.status}</p>
                </div>
                <div>
                    <p>{user.location.city}</p>
                    <p>{user.location.country}</p>
                </div>
            </div>
        </div>
    )

    return (
        <ContainerPage>
            <h2>Users</h2>
            <div>
                {usersList}
            </div>
        </ContainerPage>
    )
}

export default Users;