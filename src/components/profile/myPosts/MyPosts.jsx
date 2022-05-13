import React from "react";
import s from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";
import Post from "./MyPost/MyPost";

const MyPosts = () => {

    let posts = [
        {id: '1', message: 'Hi, my friends', likesCount: '11'},
        {id: '2', message: `It's my first post`, likesCount: '25'}
    ]

    let postsElements = posts.map(post => <MyPost key={post.id} {...post}/>)

    return (
        <div className={s.contentPosts}>
            <h2>My Posts</h2>
            <article className={s.contentPostsPostNew}>
                <textarea className={s.contentPostsPostNewText} name="" id=""></textarea>
                <button className={s.contentPostsPostNewButton}>add post</button>
            </article>
            <div className={s.contentPostsItems}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
