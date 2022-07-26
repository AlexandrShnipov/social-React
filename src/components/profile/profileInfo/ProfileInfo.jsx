import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {

  if (!props.profile){
    return <Preloader/>
  }

  let {fullName, photos, lookingForAJob, lookingForAJobDescription} = props.profile

    return (
        <>
            <div className={s.contentImgWrap}>
                <img className={s.contentImg}
                     src="https://cdn.vitecimagingsolutions.com/fileadmin/Gitzo/Global/Contents/Nature___Wildlife/marquee.jpg"
                     alt="img"/>
            </div>
            <div className={s.contentUser}>
                <div className={s.contentUserImgWrap}>
                    <img className={s.contentUserImg}
                         src={photos.large}
                         alt="user foto"/>
                </div>
                <div className={s.contentUserDescription}>
                    <p>{fullName}</p>
                    <p>looking for a job: {lookingForAJob ? 'yes' : 'no'}</p>
                    <p>comment: {lookingForAJobDescription}</p>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;
