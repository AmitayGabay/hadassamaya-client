import React from 'react';
import style from "./Title.module.css"

const Title = ({ titlesArr, color = "black", padding = "0" }) => {
    return (
        <div className={style.wrapsTitles}>
            {titlesArr?.map((titleObj, index) => {
                if (titleObj.h1) {
                    return (
                        <h1 className={style.h1} key={index}>{titleObj.h1}</h1>
                    )
                }
                if (titleObj.h2) {
                    return (
                        <h2 className={style.h2} style={{ color: color, padding: padding }} key={index}>{titleObj.h2}</h2>
                    )
                }
                if (titleObj.h3) {
                    return (
                        <h3 className={style.h3} style={{ color: color, padding: padding }} key={index}>{titleObj.h3}</h3>
                    )
                }
                if (titleObj.h4) {
                    return (
                        <h4 className={style.h4} style={{ color: color, padding: padding }} key={index}>{titleObj.h4}</h4>
                    )
                }
                if (titleObj.h5) {
                    return (
                        <h5 className={style.h5} style={{ color: color, padding: padding }} key={index}>{titleObj.h5}</h5>
                    )
                }
            })}
        </div>
    )
}

export default Title;