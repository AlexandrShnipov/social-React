import React from "react";
import s from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";
import {
    addPostActionCreator,
    updateNewPOstTextActionCreator} from "../../../redux/profilePageReducer";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <MyPost key={post.id} {...post}/>)

    let newPostElement = React.createRef();
    const addPost = () => {
        //let text = newPostElement.current.value;
        //props.addPost(text);
        props.dispatch(addPostActionCreator());
        //newPostElement.current.value = '';
        //props.updateNewPostText('');
    }

    const onPostChange = (e) => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPOstTextActionCreator(text));
    }

    return (
        <div className={s.contentPosts}>
            <h2 className={s.contentPostsTitle}>My Posts</h2>
            <article className={s.contentPostsPostNew}>
                <textarea
                    className={s.contentPostsPostNewText}
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.addPostText}/>
                <button className={s.contentPostsPostNewButton} onClick={addPost}>add post</button>
            </article>
            <div className={s.contentPostsItems}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
