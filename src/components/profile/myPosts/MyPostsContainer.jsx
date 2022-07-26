import React from "react";
import {
    addPost,
    updateNewPostText
} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        addPostText: state.profilePage.addPostText,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostText: (text) => {
//             let action = updateNewPostTextActionCreator(text);
//             dispatch(action)
//         },
//         addPost: () => {
//             dispatch(addPostActionCreator())
//         }
//     }
// }

const MyPostsContainer = connect (mapStateToProps,
  {updateNewPostText, addPost}) (MyPosts)

export default MyPostsContainer;
