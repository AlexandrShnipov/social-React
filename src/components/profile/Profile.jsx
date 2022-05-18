import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";
import ContainerPage from "../../common/containerPage/ContainerPage";

const Profile = (props) => {
    return (
        <>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </>
    )
}

export default Profile;
