import React, { useState } from 'react';
import style from './Question.module.css';

const Question = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleChange = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={style.wrapper}>
            <button className={!isOpen ? `${style.accordion}` : `${style.accordion} ${style.activeAccordion}`} onClick={handleChange}><span>{question}</span></button>
            <div className={!isOpen ? `${style.panel}` : `${style.panel} ${style.activePanel}`}>
                <p className={style.p}>{answer}</p>
            </div>
        </div>
    )
}

export default Question;