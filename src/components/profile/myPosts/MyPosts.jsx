import React from "react";
import s from './MyPosts.module.css';
import MyPost from "./MyPost/MyPost";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <MyPost key={post.id} {...post}/>)

    const onAddPost = (value) => {
      //debugger
        props.addPost(value.addPostText);
    }

    return (
        <div className={s.contentPosts}>
            <h2 className={s.contentPostsTitle}>My Posts</h2>
           <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.contentPostsItems}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props)=> {
  return(
    <form className={s.contentPostsPostNew} onSubmit={props.handleSubmit}>
                <Field
                  component={'textarea'}
                  name='addPostText'/>
      <button className={s.contentPostsPostNewButton}>add post</button>
    </form>
  )
}


const AddNewPostFormRedux = reduxForm({form:'ProfileAddNewPostForm'}) (AddNewPostForm);

export default MyPosts;
