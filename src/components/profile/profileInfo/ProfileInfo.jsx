import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import userDefaultPhoto from "../../../assets/images/userDefaultPhoto.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
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
               src={photos.large !== null
                 ? photos.large
                 : userDefaultPhoto}
               alt="user photo"/>
          {props.isOwner &&
            <label>
              &#128247;
              <input type={'file'} onChange={onMainPhotoSelected}/>
            </label>
          }
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
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
