import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {Navigate} from "react-router-dom";



const Profile = (props) => {

  return (
        <>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />

        </>
    )
}

export default Profile;
