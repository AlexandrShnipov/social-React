import React from "react";
import s from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <MyPost key={post.id} {...post}/>)

    let addPostElement = React.createRef();
    let addPost = () => {
        let text = addPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.contentPosts}>
            <h2 className={s.contentPostsTitle}>My Posts</h2>
            <article className={s.contentPostsPostNew}>
                <textarea className={s.contentPostsPostNewText} name="" id="" ref={addPostElement}></textarea>
                <button className={s.contentPostsPostNewButton} onClick={addPost}>add post</button>
            </article>
            <div className={s.contentPostsItems}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
