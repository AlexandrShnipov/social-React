import {NavLink} from "react-router-dom";
import s from './FriendsItem.module.css';

const FriendsItem = (props) => {
    return (
        <li className={s.navListItemFriend}>
            <img className={s.navListItemFriendImg}
                 src={props.photo}/>
                <NavLink className={s.navListItemFriendLink} to={''}>{props.name}</NavLink>
        </li>
)
}
export default FriendsItem;