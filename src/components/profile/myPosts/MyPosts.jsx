import React from "react";
import s from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";

const MyPosts = () => {

    let postData = [
        {id: '1', message: 'Hi, my friends', likesCount: '11'},
        {id: 2, message: `It's my first post`, likesCount: '25'}
    ]

    return (
        <div className={s.contentPosts}>
            <h2>My Posts</h2>
            <article className={s.contentPostsPostNew}>
                <textarea className={s.contentPostsPostNewText} name="" id=""></textarea>
                <button className={s.contentPostsPostNewButton}>add post</button>
            </article>
            <div className={s.contentPostsItems}>
                <MyPost
                    message={postData[0].message}
                    likesCount={postData[0].likesCount}
                />
                <MyPost
                    message={postData[1].message}
                    likesCount={postData[1].likesCount}
                />
            </div>
        </div>
    )
}

export default MyPosts;
