import React from "react";
import s from './ContainerPage.module.css';

const ContainerPage = (props) => {
    return (
        <div className={s.container}>
            {props.children}
        </div>
    )
}
export default ContainerPage;