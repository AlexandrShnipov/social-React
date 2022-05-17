
import s from './MyPost.module.css';

const MyPost = (props) => {
    return (
        <article className={s.post}>
            <img className={s.postImg}
                 src={props.photo}
                 alt=""/>
            <p className={s.postText}>{props.message}</p>
            <div className={s.postLike}>
                <span>like {props.likesCount}</span>
            </div>
        </article>
    )
}

export default MyPost;
