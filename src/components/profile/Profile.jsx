import React from "react";

const Profile = () => {
    return (
        <main className={'content'}>
            <div className={'content__img-wrap'}>
                <img className={'content__img'}
                     src="https://cdn.vitecimagingsolutions.com/fileadmin/Gitzo/Global/Contents/Nature___Wildlife/marquee.jpg" alt="img"/>
            </div>
            <div className={'content__user'}>
                <div className={'content__user-img-wrap'}>
                    <img className={'content__user-img'}
                         src="https://cdn3.f-cdn.com/contestentries/1269942/15600440/5a991c82be987_thumb900.jpg"
                         alt="user foto"/>
                </div>
                <div className={'content__user-description'}>
                    user__description
                </div>
            </div>
            <div className={'content__posts'}>
                <article className={'content__posts-post--new'}>new</article>
                <article className={'content__posts-post'}>1</article>
                <article className={'content__posts-post'}>2</article>
            </div>
        </main>
    )
}

export default Profile;
