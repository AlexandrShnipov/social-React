import React from "react";
import s from './MyPost.module.css';

const MyPost = (props) => {
    console.log(props)
    return (
        <article className={s.post}>
            <img className={s.postImg}
                 src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14.jpeg?m6aZMJ2FuRNdIJhw9MbIpcGgJvY3yzW6&size=770:433"
                 alt=""/>
            <p className={s.postText}>{props.message}</p>
            <div className={s.postLike}>
                <span>like {props.likesCount}</span>
            </div>
        </article>
    )
}

export default MyPost;
