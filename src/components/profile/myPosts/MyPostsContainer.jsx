import React from "react";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
      <MyPosts
          updateNewPostText = {onPostChange}
          addPost = {addPost}
          posts={state.profilePage.posts}
          addPostText = {state.profilePage.addPostText}
      />
    )
}

export default MyPostsContainer;
