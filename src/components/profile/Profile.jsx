import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <>
            <ProfileInfo/>
            <MyPostsContainer />

        </>
    )
}

export default Profile;
