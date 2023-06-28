import React from 'react';
import style from "./Text.module.css";

const Text = ({ textsArr }) => {
    return (
        <div className={style.wrapsTexts}>
            <div className={style.text}>
                {textsArr.map((text, index) =>
                    <p key={index}>{text}</p>
                )}
            </div>
        </div>
    )
}

export default Text;