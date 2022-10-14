import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import userDefaultPhoto from "../../../assets/images/userDefaultPhoto.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./profileDataForm/ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    const goToEditMode = () => {
        setEditMode(true)
    }

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    let {photos} = props.profile

    const onSubmit = (formData) => {
        debugger
        props.saveProfile(formData)
            .then(() => {
                setEditMode(false)
            });
    }

    // const onSubmit = (formData) => {
    //     props.saveProfile(formData)
    //
    //         setEditMode(false)
    //
    // }

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
                {editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData
                        profile={props.profile}
                        isOwner={props.isOwner}
                        goToEditMode={goToEditMode}/>
                }
            </div>
        </>
    )
}

export default ProfileInfo;

const ProfileData = (props) => {
    let {fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts} = props.profile
    return (
        <div className={s.contentUserDescription}>
            {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
            <p><strong>Full name: </strong>{fullName}</p>
            <p><strong>Looking for a job:</strong> {lookingForAJob ? 'yes' : 'no'}</p>
            {lookingForAJob &&
                <p><strong>My professional skills:</strong>{lookingForAJobDescription}</p>
            }
            <p><strong>About me:</strong>{aboutMe}</p>
            <div>
                <p><strong>Contacts:</strong>{Object.keys(contacts).map(key => {
                    return (
                        <Contact key={key} contactTitle={key} contactValue={contacts[key]}/>
                    )
                })}</p>
            </div>
        </div>
    )
}

export const Contact = ({contactTitle, contactValue}) => {
    return (
        <p><strong>{contactTitle}:</strong> {contactValue}</p>
    )
}
//export default Contact;