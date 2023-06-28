import React from 'react';
import style from "./Ul.module.css";

const Ul = ({ itemsArr }) => {
    return (
        <div className={style.wrapsUl}>
            <ul className={style.ul}>
                {itemsArr.map((item, index) =>
                    <li className={style.li} key={index}>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default Ul;