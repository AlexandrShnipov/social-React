import React from "react";
import s from  './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return (
        <main className={s.content}>
            <div className={s.contentImgWrap}>
                <img className={s.contentImg}
                     src="https://cdn.vitecimagingsolutions.com/fileadmin/Gitzo/Global/Contents/Nature___Wildlife/marquee.jpg" alt="img"/>
            </div>
            <div className={s.contentUser}>
                <div className={s.contentUserImgWrap}>
                    <img className={s.contentUserImg}
                         src="https://cdn3.f-cdn.com/contestentries/1269942/15600440/5a991c82be987_thumb900.jpg"
                         alt="user foto"/>
                </div>
                <div className={s.contentUserDescription}>
                    user__description
                </div>
            </div>
         <MyPosts/>
        </main>
    )
}

export default Profile;
