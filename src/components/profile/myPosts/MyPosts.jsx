import React from "react";
import s from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";

const MyPosts = () => {
    return (
        <div className={s.contentPosts}>
            <h2>My Posts</h2>
            <article className={s.contentPostsPostNew}>
                <textarea name="" id=""></textarea>
                <button>add post</button>
            </article>
            <div className={s.contentPostsItems}>
                <MyPost
                    message={'Hi, hello my friends!'}
                    likesCount={'11'}
                />
                <MyPost
                    message={`It's my first post`}
                    likesCount={'25'}
                />
            </div>
        </div>
    )
}

export default MyPosts;
