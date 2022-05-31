import React from "react";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                const onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        addPostText={state.profilePage.addPostText}
                    />
                )
            }
            }
        </StoreContext.Consumer>
    )
}



export default MyPostsContainer;
