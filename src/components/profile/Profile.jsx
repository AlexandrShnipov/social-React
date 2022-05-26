import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";

const Profile = (props) => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={props.stateProfilePage.posts}
                     addPostText={props.stateProfilePage.addPostText}
                     dispatch={props.dispatch}
            />
        </>
    )
}

export default Profile;
