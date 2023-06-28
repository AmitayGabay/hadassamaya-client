import React from 'react';
import style from "./BorderLine.module.css";

const BorderLine = () => {
    return (
        <div className={style.wrapsHr}>
            <hr className={style.oneHr}></hr>
            <hr className={style.twoHr}></hr>
            <hr className={style.threeHr}></hr>
        </div>
    )
}

export default BorderLine;