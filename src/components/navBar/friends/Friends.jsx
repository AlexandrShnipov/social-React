import React from "react";
import s  from './Friends.module.css';
import FriendsItem from "./friendsItem/FriendsItem";

const Friends = (props) => {

    let friendsElement = props.friendsNavBar.map(friend => <FriendsItem key={friend.id} {...friend}/>);

    return (
        <li className={s.navListItem}>Friends
            <ul className={s.navListItemFriends}>
                {friendsElement}
            </ul>
        </li>
    )
}
export default Friends;
