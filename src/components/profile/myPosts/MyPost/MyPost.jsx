import React from "react";
import s from './MyPost.module.css';

const MyPost = () => {
    return (
        <article className={s.post}>
            <h3 className={s.postTitle}>post 1</h3>
            <img className={s.postImg}
                 src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14.jpeg?m6aZMJ2FuRNdIJhw9MbIpcGgJvY3yzW6&size=770:433"
                 alt=""/>
            <div className={s.postLike}>
                <span>1 like</span>
            </div>
        </article>
    )
}

export default MyPost;
