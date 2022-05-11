import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts/>
        </>
    )
}

export default Profile;
